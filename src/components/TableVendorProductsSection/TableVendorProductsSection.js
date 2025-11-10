"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Box, Container, Typography} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import BaseButton from "@/components/BaseButton/BaseButton";
import productsService from "@/services/products.service";
import {PATHS} from "@/consts/path.const";
import ActionsButton from "@/components/UI/ActionsButton";
import ModalDelete from "@/components/UI/ModalDelete";
import styles from '@/components/TableVendorProductsSection/TableVendorProductsSection.module.scss';

const TableVendorProductsSection = () => {
    const [products, setProducts] = useState({
        count: 0,
        rows: [],
    });
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await productsService.getAllByVendor();
            setProducts(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRowSelection = (selectionModel) => {
        setSelectedRows(selectionModel);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async (event, id) => {
        event.stopPropagation();
        await productsService.delete(id);
        setOpen(false);
        fetchProducts();
    }

    const handleEdit = (event, item) => {
        event.stopPropagation();
        return router.push(`/admin/vendor/products/${item.id}`);
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'title', headerName: 'Title', width: 300},
        {field: 'price', headerName: 'Price', width: 120},
        {field: 'createdAt', headerName: 'Created At', width: 200},
        {field: 'updatedAt', headerName: 'Updated At', width: 200},
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            sortable: false,
            renderCell: (params) => (
               <>
                   <ActionsButton params={params} openModal={handleClickOpen} onEdit={handleEdit} />
                   <ModalDelete params={params} open={open} handleClose={handleClose} onDelete={handleDelete}/>
               </>
            ),
        },
    ];

    const paginationModel = {page: 0, pageSize: 5};

    return (
        <Box component="section">
            <Container className={styles.container}>
                <Typography variant="h5" className={styles.mainTitle}>My Products</Typography>
                <Box className={styles.btnContainer}>
                    <Link href={PATHS.ADD_NEW_PRODUCTS_BY_VENDOR}>
                        <BaseButton variant="text" className={styles.btnAddProduct}>Add new product</BaseButton>
                    </Link>
                </Box>
                <Paper className={styles.paper} sx={{height: '100%', width: '100%'}}>
                    <DataGrid
                        rows={products.rows.map((product) => {
                            return {
                                key: product.id,
                                id: product.id,
                                title: product.title,
                                price: `$${product.price}`,
                                createdAt: product.createdAt,
                                updatedAt: product.updatedAt,
                            }
                        })}
                        columns={columns}
                        initialState={{pagination: {paginationModel}}}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        className={styles.dataGrid}
                        onSelectionModelChange={handleRowSelection}
                        selectionModel={selectedRows}
                        sx={{
                            border: 0,
                            '.MuiDataGrid-columnHeaders': {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textTransform: 'uppercase',
                                // backgroundColor: '#222',
                                // color: '#fff',
                                width: '100%',
                            },
                            '.MuiDataGrid-row.Mui-selected': {
                                backgroundColor: '#222',
                                color: '#fff',
                                '&.MuiDataGrid-row.Mui-selected:hover': {
                                    backgroundColor: '#222',
                                    color: '#fff',
                                },
                            },
                            '.MuiDataGrid-cell:focus': {
                                backgroundColor: '#222',
                                color: '#fff',
                                '&.MuiDataGrid-cell:focus:hover': {
                                    backgroundColor: '#222',
                                    color: '#fff',
                                },
                            },
                            '& .MuiDataGrid-footerContainer': {
                                backgroundColor: '#fff',
                                color: '#222',
                            },
                        }}
                    />
                </Paper>
            </Container>
        </Box>
    );
};

export default TableVendorProductsSection;
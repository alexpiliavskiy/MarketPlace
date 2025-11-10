"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Box, Button, Container, Typography} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import BaseButton from "@/components/BaseButton/BaseButton";
import {PATHS} from "@/consts/path.const";
import userService from "@/services/user.service";
import ActionsButton from "@/components/UI/ActionsButton";
import ModalDelete from "@/components/UI/ModalDelete";
import Loader from "@/components/Loader/Loader";
import styles from '@/components/TableAdminAllVendorsSection/TableAdminAllVendorsSection.module.scss';

const TableAdminAllVendorsSection = () => {
    const [vendors, setVendors] = useState({
        count: 0,
        rows: [],
    });
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const fetchVendors = async () => {
        try {
            setLoading(true);
            const data = await userService.getAllVendors();
            setVendors(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVendors();
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
        await userService.deleteVendor(id);
        setOpen(false);
        fetchVendors();
    }

    const handleEdit = (event, item) => {
        event.stopPropagation();
        return router.push(`/admin/admin/vendors/${item.id}`);
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'FirstName', width: 200},
        {field: 'email', headerName: 'Email', width: 230},
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
            {loading ? <Loader /> :
                <Container className={styles.container}>
                    <Typography variant="h5" className={styles.mainTitle}>All Vendors</Typography>
                    <Box className={styles.btnContainer}>
                        <Link href={PATHS.ADD_NEW_VENDOR_BY_ADMIN}>
                            <BaseButton variant="text" className={styles.btnAddVendor}>Add new vendor</BaseButton>
                        </Link>
                    </Box>
                    <Paper className={styles.paper} sx={{height: '100%', width: '100%'}}>
                        <DataGrid
                            rows={vendors.rows.map(vendor => ({
                                key: vendor.id,
                                id: vendor.id,
                                firstName: vendor.firstName,
                                email: vendor.email,
                                createdAt: vendor.createdAt,
                                updatedAt: vendor.updatedAt,
                            }))}
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
            }
        </Box>
    );
};

export default TableAdminAllVendorsSection;
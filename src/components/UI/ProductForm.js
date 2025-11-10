"use client";
import React, {useEffect, useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import productsService from "@/services/products.service";
import categoriesService from "@/services/categories.service";
import colorsService from "@/services/colors.service";
import sizesService from "@/services/sizes.service";
import brandsService from "@/services/brands.service";
import {PATHS} from "@/consts/path.const";
import {Alert, Box, Container, Grid, Snackbar, TextField, Typography} from "@mui/material";
import BasicMultiSelect from "@/components/UI/BasicMultiSelect";
import BaseButton from "@/components/BaseButton/BaseButton";
import MultiFileUpload from "@/components/UI/MultiFileUpload";
import MyCkEditor from "@/components/UI/MyCkEditor";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/UI/ProductForm.module.scss";

const ProductForm = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const router = useRouter();
    const params = useParams();
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        salePrice: "",
        categories: [],
        colors: [],
        sizes: [],
        brandId: null,
        images: [],
        imagesToDelete: [],
        description: ""
    });

    const handleImagesChange = (updatedImages, imagesToDelete) => {
        setFormData((prevData) => ({
            ...prevData,
            images: updatedImages,
            imagesToDelete
        }));
    };

    const fetchProduct = async (productId) => {
        try {
            setLoading(true);
            const product = await productsService.getOneByVendor(productId);
            setFormData(prev => {
                return {
                    ...prev,
                    title: product.title,
                    price: product.price,
                    salePrice: product.salePrice,
                    categories: product.categories.map(category => category.id),
                    colors: product.colors.map(color => color.id),
                    sizes: product.sizes.map(size => size.id),
                    brandId: product.brandId,
                    images: product.images,
                    description: product.description || ""
                }
            });
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const descriptionChange = (value) => {
        setFormData(prev => {
            return {
                ...prev,
                description: value,
            }
        })
    }

    const fetchCategories = async () => {
        const data = await categoriesService.getAll();
        setCategories(data);
    };

    const fetchColors = async () => {
        const data = await colorsService.getAll();
        setColors(data);
    };

    const fetchSizes = async () => {
        const data = await sizesService.getAll();
        setSizes(data);
    };

    const fetchBrands = async () => {
        const data = await brandsService.getAll();
        setBrands(data);
    };

    useEffect(() => {
        if (params.id) {
            fetchProduct(params.id);
        }
        fetchCategories();
        fetchColors();
        fetchSizes();
        fetchBrands();
    }, []);

    const validateForm = () => {
        const errors = {};

        if (!formData.title.trim()) errors.title = "Title is required.";
        if (!formData.price || Number(formData.price) <= 0) errors.price = "Price must be greater than 0.";
        if (!formData.salePrice || Number(formData.salePrice) < 0) errors.salePrice = "Sale price must be 0 or greater.";
        if (!formData.categories.length) errors.categories = "At least one category is required.";
        if (!formData.colors.length) errors.colors = "At least one color is required.";
        if (!formData.sizes.length) errors.sizes = "At least one size is required.";
        if (!formData.brandId) errors.brandId = "At least one brands is required.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const saveChangesByProduct = async ({goBack = false}) => {
        if (!validateForm()) {
            setError(true);
            setErrorMessage("Please fix the errors in the form.");
            return;
        }
        try {
            setError(false);
            setOpen(true);
            setErrorMessage("");
            const newFormData = new FormData();
            //TODO check file is Object
            Object.keys(formData).forEach(key => {
                if (key === "images") {
                    formData.images.forEach((image) => {
                        if(image instanceof File) {
                            newFormData.append("images", image);
                        }
                    })
                } else if(Array.isArray(formData[key])) {
                    formData[key].forEach((item, index) => {
                        newFormData.append(`${key}[${index}]`, item);
                    });
                } else {
                    newFormData.append(key, formData[key])
                }
            })

            const product = params.id
                ? await productsService.update(params.id, newFormData)
                : await productsService.create(newFormData);

            if (goBack) {
                return backChangesByProduct();
            }

            if (!params.id) {
                router.push(`/admin/vendor/products/${product.id}`);
            }
        } catch (e) {
            setError(true);
            setErrorMessage(e.message);
        }
    };


    const backChangesByProduct = () => {
        router.push(PATHS.REDIRECT_TO_PRODUCTS_BY_VENDOR);
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setError(false);
    };


    return (
        <Box component="section" className={styles.formContainer}>
            {params.id && loading ? <Loader /> :
                <Container>
                    <Typography variant="h5" className={styles.mainTitle}>
                        {params.id ? "Edit my product" : "Create product"}
                    </Typography>
                    {error ? (
                        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                            <Alert
                                onClose={handleClose}
                                severity="error"
                                variant="filled"
                                sx={{width: '100%'}}
                            >
                                {errorMessage}
                            </Alert>
                        </Snackbar>
                    ) : (
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert
                                onClose={handleClose}
                                severity="success"
                                variant="filled"
                                sx={{width: '100%'}}
                            >
                                {"Product is updated successfully!"}
                            </Alert>
                        </Snackbar>
                    )}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} sm={12}>
                            <Box className={styles.inputContainer}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} lg={4} sm={12}>
                                        <TextField className={styles.titleInput}
                                                   margin="dense"
                                                   name="title"
                                                   type="text"
                                                   label="Title"
                                                   fullWidth
                                                   value={formData.title}
                                                   onChange={handleChange}
                                                   required
                                                   error={!!formErrors.title}
                                                   helperText={formErrors.title}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sm={12}>
                                        <TextField className={styles.priceInput}
                                                   margin="dense"
                                                   name="price"
                                                   type="number"
                                                   label="Price"
                                                   fullWidth
                                                   value={formData.price}
                                                   onChange={handleChange}
                                                   required
                                                   error={!!formErrors.price}
                                                   helperText={formErrors.price}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sm={12}>
                                        <TextField className={styles.salePriceInput}
                                                   margin="dense"
                                                   name="salePrice"
                                                   type="number"
                                                   label="Sale Price"
                                                   fullWidth
                                                   value={formData.salePrice}
                                                   onChange={handleChange}
                                                   required
                                                   error={!!formErrors.salePrice}
                                                   helperText={formErrors.salePrice}
                                        />
                                    </Grid>
                                    <Grid container spacing={2} pt="20px" pl="15px">
                                        <Grid item xs={12} lg={4} sm={12}>
                                            <BasicMultiSelect name="categories" value={formData.categories}
                                                              handleChange={handleChange} options={categories}
                                                              error={!!formErrors.categories}
                                                              helperText={formErrors.categories}/>
                                        </Grid>
                                        <Grid item xs={12} lg={4} sm={12}>
                                            <BasicMultiSelect name="colors" value={formData.colors}
                                                              handleChange={handleChange} options={colors}
                                                              error={!!formErrors.colors}
                                                              helperText={formErrors.colors}/>
                                        </Grid>
                                        <Grid item xs={12} lg={4} sm={12}>
                                            <BasicMultiSelect name="sizes" value={formData.sizes}
                                                              handleChange={handleChange} options={sizes}
                                                              error={!!formErrors.sizes}
                                                              helperText={formErrors.sizes}/>
                                        </Grid>
                                        <Grid item xs={12} lg={4} sm={12}>
                                            <BasicMultiSelect multiple={false} name="brandId" value={formData.brandId}
                                                              handleChange={handleChange} options={brands}
                                                              error={!!formErrors.brandId}
                                                              helperText={formErrors.brandId}/>
                                        </Grid>
                                        <Grid item xs={12} lg={12} sm={12}>
                                            <Box
                                                dangerouslySetInnerHTML={{
                                                    __html: formData.description,
                                                }}
                                            />
                                            <MyCkEditor value={formData.description} onChange={descriptionChange}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12}>
                            <Grid container spacing={2}>
                                <Box className={styles.btnContainer}>
                                    <Grid item xs={12} lg={12} md={12} sm={12}>
                                        <MultiFileUpload  images={formData.images}
                                                          onImagesChange={handleImagesChange} />
                                    </Grid>
                                    <Grid item xs={12} lg={2} md={3} sm={12}>
                                        <BaseButton onClick={saveChangesByProduct} variant="text"
                                                    className={styles.saveBtnProduct}>Save</BaseButton>
                                    </Grid>
                                    <Grid item xs={12} lg={2} md={3} sm={12}>
                                        <BaseButton onClick={() => saveChangesByProduct({goBack: true})} variant="text"
                                                    className={styles.saveBackBtnProduct}>Save and back</BaseButton>
                                    </Grid>
                                    <Grid item xs={12} lg={2} md={3} sm={12}>
                                        <BaseButton onClick={backChangesByProduct} variant="text"
                                                    className={styles.backBtnProduct}>Back</BaseButton>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }
        </Box>
    );
};

export default ProductForm;
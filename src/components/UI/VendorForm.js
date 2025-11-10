"use client";
import React, {useEffect, useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import {Alert, Box, Container, Grid, Snackbar, TextField, Typography} from "@mui/material";
import BaseButton from "@/components/BaseButton/BaseButton";
import {PATHS} from "@/consts/path.const";
import userService from "@/services/user.service";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/UI/VendorForm.module.scss";

const VendorForm = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
    const [errors, setErrors] = useState({
        firstNameError: false,
        secondNameError: false,
        emailError: false,
        passwordError: false
    });
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        images: [],
        imagesToDelete: []
    });

    const fetchVendor = async (vendorId) => {
        try {
            setLoading(true);
            const vendor = await userService.getOneVendor(vendorId);
            setFormData(prev => {
                return {
                    ...prev,
                    firstName: vendor.firstName,
                    secondName: vendor.secondName,
                    email: vendor.email,
                    password: vendor.password,
                    roles: vendor.roles.map(role => role.id),
                    images: vendor.images
                }
            });
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (params.id) {
            fetchVendor(params.id);
        }
    }, []);

    const validateFirstName = (value) => value.trim().length > 1;
    const validateSecondName = (value) => value.trim().length > 1;
    const validateEmail = (value) => value.trim().includes("@") && value.includes(".");
    const validatePassword = (value) => value.trim().length >= 8;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [`${name}Error`]: !validateValue(name, value),
        }));
    };

    const validateValue = (name, value) => {
        switch (name) {
            case "firstName":
                return validateFirstName(value);
            case "secondName":
                return validateSecondName(value);
            case "email":
                return validateEmail(value);
            case "password":
                return validatePassword(value);
            default:
                return true;
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setError(false);
    };

        const saveChangesByVendor = async ({goBack = false}) => {
            const firstNameError = !validateFirstName(formData.firstName);
            const secondNameError = !validateSecondName(formData.secondName);
            const emailError = !validateEmail(formData.email);
            const passwordError = !validatePassword(formData.password);

            setErrors({firstNameError, secondNameError, emailError, passwordError});

            if (!firstNameError && !secondNameError && !emailError && !passwordError) {
                try {
                    setError(false);
                    setOpen(true);
                    setErrorMessage("");

                    Object.keys(formData).forEach((key) => {
                        return {
                            ...formData[key],
                        [`${key}`]: formData[key],
                        };
                    })

                    const vendor = params.id
                        ? await userService.updateVendor(params.id, formData)
                        : await userService.createVendor(formData);

                    if (goBack) {
                        return backChangesByVendor();
                    }

                    if (!params.id) {
                        router.push(`/admin/admin/vendors/${vendor.id}`);
                    }
                } catch (e) {
                    setError(true);
                    setErrorMessage(e.message);
                }
            } else {
                setError(true);
                setErrorMessage("Please fix the errors before saving.");
            }
        }

    const backChangesByVendor = () => {
        router.push(PATHS.REDIRECT_TO_VENDORS_BY_ADMIN);
    };

    return (
        <Box component="section" className={styles.formContainer}>
            {params.id && loading ? <Loader /> :
                <Container>
                    <Typography variant="h5" className={styles.mainTitle}>
                        {params.id ? "Edit vendor" : "Create vendor"}
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
                                {"Vendor is updated successfully!"}
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
                                                   name="firstName"
                                                   type="text"
                                                   label="FirstName"
                                                   fullWidth
                                                   value={formData.firstName}
                                                   onChange={handleChange}
                                                   required
                                                   error={errors.firstNameError}
                                                   helperText={errors.firstNameError ? "Please enter a FirstName" : " "}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sm={12}>
                                        <TextField className={styles.titleInput}
                                                   margin="dense"
                                                   name="secondName"
                                                   type="text"
                                                   label="SecondName"
                                                   fullWidth
                                                   value={formData.secondName}
                                                   onChange={handleChange}
                                                   required
                                                   error={errors.secondNameError}
                                                   helperText={errors.secondNameError ? "Please enter a SecondName" : " "}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sm={12}>
                                        <TextField className={styles.titleInput}
                                                   margin="dense"
                                                   name="email"
                                                   type="email"
                                                   label="Email"
                                                   fullWidth
                                                   value={formData.email}
                                                   onChange={handleChange}
                                                   required
                                                   error={errors.emailError}
                                                   helperText={errors.emailError ? "Please enter a valid email address" : " "}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sm={12}>
                                        <TextField className={styles.titleInput}
                                                   name="password"
                                                   type="password"
                                                   label="Password"
                                                   fullWidth
                                                   value={formData.password}
                                                   onChange={handleChange}
                                                   required
                                                   error={errors.passwordError}
                                                   helperText={errors.passwordError ? "Password must be at least 8 characters" : " "}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12}>
                            <Grid container spacing={2}>
                                <Box className={styles.btnContainer}>
                                    <Grid item xs={12} lg={2} md={3} sm={12}>
                                        <BaseButton onClick={saveChangesByVendor} variant="text"
                                                    className={styles.saveBtnProduct}>Save</BaseButton>
                                    </Grid>
                                    <Grid item xs={12} lg={2} md={3} sm={12}>
                                        <BaseButton onClick={() => saveChangesByVendor({goBack: true})} variant="text"
                                                    className={styles.saveBackBtnProduct}>Save and back</BaseButton>
                                    </Grid>
                                    <Grid item xs={12} lg={2} md={3} sm={12}>
                                        <BaseButton onClick={backChangesByVendor} variant="text"
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

export default VendorForm;
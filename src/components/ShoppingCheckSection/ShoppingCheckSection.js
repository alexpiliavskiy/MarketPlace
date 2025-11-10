"use client";

import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import ProgressLineOrderSection from "@/components/ProgressLineOrderSection/ProgressLineOrderSection";
import OrderSummarySection from "@/components/OrderSummarySection/OrderSummarySection";
import PaymentMethods from "@/components/PaymentMethodsSection/PaymentMethods";
import Loader from "@/components/Loader/Loader";
import {Stack} from "@mui/system";
import {Autocomplete} from "@mui/lab";
import debounce from 'lodash.debounce';
import novaPoshtaService from "@/services/novaPoshta.service";
import styles from "@/components/ShoppingCheckSection/ShoppingCheckPage.module.scss";
import Link from "next/link";
import BaseButton from "@/components/BaseButton/BaseButton";

const ShoppingCheckSection = () => {
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const currentUser = useSelector((state) => state.addUser.addCurrentUser);
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        city: null,
        department: null
    });
    const [formErrors, setFormErrors] = useState({});
    const validateEmail = (value) => !value.trim().includes("@");
    const validateForm = () => {
        const errors = {};

        if (!formData.firstName.trim()) errors.firstName = "First name is required.";
        if (!formData.secondName.trim()) errors.secondName = "Second name is required.";

        if (!formData.city) errors.city = "At least one city is required.";
        if (!formData.department) errors.department = "At least one department is required.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        let error = "";

        if (name === "email" && validateEmail(value)) {
            error = "Please enter a valid email address.";
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    const fetchOptions = React.useMemo(
        () =>
            debounce(async (query) => {
                if (!query) return;
                try {
                    const getCity = await novaPoshtaService.getSities(query);
                    setCities(getCity.data.map(item => ({id: item.Ref, name: item.Description})));
                } catch (error) {
                    throw error;
                }
            }, 500),
        []
    );

    const fetchOptionsDepartments = React.useMemo(
        () =>
            debounce(async (cityName) => {
                if (!cityName) return;
                try {
                    const getDepartments = await novaPoshtaService.getDepartments(cityName);
                    setDepartments(getDepartments.data.map(item => ({id: item.Ref, name: item.Description})));
                } catch (error) {
                    throw error;
                }
            }, 500),
        []
    );

    useEffect(() => {
        fetchOptions(inputValue);
        fetchOptionsDepartments(inputValue);
    }, [inputValue, fetchOptions, fetchOptionsDepartments]);

    useEffect(() => {
        const initializeForm = async () => {
            setFormData((prev) => ({
                ...prev,
                firstName: currentUser?.firstName || "",
                secondName: currentUser?.secondName || "",
                email: currentUser?.email || "",
            }));

            setTimeout(() => {
                validateForm();
                setLoading(false);
            }, 1000);
        };

        if (currentUser) {
            initializeForm();
        }
    }, [currentUser]);

    const orders = {
        orderNumber: '13119',
        date: '27/10/2024',
        total: '$81.40',
        paymentMethod: 'Direct Bank Transfer',
        products: [
            {name: 'Zessi Dresses x 2', price: '$32.50'},
            {name: 'Kirby T-Shirt', price: '$29.90'},
        ],
        subtotal: '$62.40',
        shipping: 'Free shipping',
        vat: '$19',
    };

    return (
        <Box component="section" pt="96px" className={styles.cartCheckPageContainer}>
            {loading ? <Loader/> :
                <Container>
                    <Typography component="h3" className={styles.cartTitle}>Shipping and Checkout</Typography>
                    <ProgressLineOrderSection/>
                    <Typography component="h5" className={styles.cartsubTitle}>BILLING DETAILS</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} sm={12}>
                            <Box className={styles.formContainer}>
                                <Grid className={styles.nameInput} container spacing={2}>
                                    <Grid item xs={12} lg={6} sm={12}>
                                        <TextField name="firstName" onChange={handleChange} value={formData.firstName}
                                                   margin="dense" type="text" label="First Name" fullWidth required/>
                                    </Grid>
                                    <Grid item xs={12} lg={6} sm={12}>
                                        <TextField name="secondName" onChange={handleChange} value={formData.secondName}
                                                   className={styles.nameInput} margin="dense" type="text"
                                                   label="Last Name" fullWidth required/>
                                    </Grid>
                                </Grid>
                                <Grid className={styles.infoInput} container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField name="email" onChange={handleChange} value={formData.email}
                                                   error={!!formErrors.email}
                                                   helperText={formErrors.email} margin="dense" type="email"
                                                   label="Your Mail" fullWidth required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="phone" margin="dense" onChange={handleChange}
                                                   value={formData.phone} error={!!formErrors.phone}
                                                   helperText={formErrors.phone} type="text" label="Phone" fullWidth
                                                   required/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={2} sx={{width: "100%"}}>
                                            <Autocomplete
                                                freeSolo
                                                getOptionLabel={(option) => option.name || ''}
                                                options={cities}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputValue(newInputValue);
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Cities"
                                                        margin="dense"
                                                        fullWidth
                                                        required
                                                    />
                                                )}
                                            />
                                            <Autocomplete
                                                freeSolo
                                                getOptionLabel={(option) => option.name || ''}
                                                options={departments}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputValue(newInputValue);
                                                }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Departments"
                                                        margin="dense"
                                                        fullWidth
                                                        required
                                                    />
                                                )}
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <OrderSummarySection orders={orders}/>
                            <PaymentMethods orders={orders}/>
                            <Link href={`/shop/confirmation`}>
                                <BaseButton variant="text" className={styles.placeOrderButton}>
                                    Place Order
                                </BaseButton>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            }
        </Box>
    );
};

export default ShoppingCheckSection;
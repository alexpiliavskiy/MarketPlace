"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import {Box, Grid, TextField, Typography} from "@mui/material";
import BaseButton from "@/components/BaseButton/BaseButton";
import {LINKS} from "@/consts/path.const";
import userService from "@/services/user.service";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/ProfileAccountDetailSection/ProfileAccountDetailContent.module.scss";


const ProfileAccountDetailContent = () => {
    const [loading, setLoading] = useState(true);
    const currentUser = useSelector((state) => state.addUser.addCurrentUser);
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        emailError: false,
        currentPasswordError: false,
        newPasswordError: false,
        confirmPasswordError: false
    });

    const validateEmail = (value) => !value.trim().includes("@");
    const validatePassword = (value) => value.trim().length < 8;

    useEffect(() => {
        try {

            setFormData((prev) => ({
                ...prev,
                firstName: currentUser?.firstName,
                secondName: currentUser?.secondName,
                email: currentUser?.email,
            }))
        } catch (e) {
            console.error(e);
        } finally {
            setTimeout(() => setLoading(false), 1000);
        }
    }, [currentUser]);

    const updateUserHandler = async () => {
        try {
            const updatedUserData = await userService.update(formData)
        } catch (e) {
            console.error(e)
        }
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [id]: value
        }));

        if (id === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                emailError: validateEmail(value)
            }));
        }

        if (id === "currentPassword" || id === "newPassword" || id === "confirmPassword") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordError: validatePassword(value),
            }));
        }

        if (id === "newPassword" || id === "confirmPassword") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                newPasswordError: formData.newPassword !== formData.confirmPassword,
                confirmPasswordError: formData.newPassword !== formData.confirmPassword,
            }));
        }
    }

    const handleValidatePasswords = () => {
        const {newPassword, confirmPassword} = formData;
        const passwordError = validatePassword(newPassword);
        const passwordsMatch = newPassword === confirmPassword;

        setErrors((prevErrors) => ({
            ...prevErrors,
            passwordError,
            newPasswordError: !passwordsMatch,
            confirmPasswordError: !passwordsMatch,
        }))

        if (!passwordsMatch) {
            console.error(new Error("Passwords do not match"));
        }
    }

    return (
        <Box component="section">
            {loading ? <Loader /> :
                <>
                    <Grid className={styles.nameInput} container spacing={2}>
                        <Grid item xs={12} lg={6} sm={12}>
                            <TextField id="firstName" onChange={handleChange} value={formData.firstName} margin="dense" type="text" label="First Name" fullWidth />
                        </Grid>
                        <Grid item xs={12} lg={6} sm={12}>
                            <TextField id="secondName" onChange={handleChange} value={formData.secondName} className={styles.nameInput} margin="dense" type="text" label="Last Name" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="email" onChange={handleChange} value={formData.email} margin="dense" type="email" label="Email Address" fullWidth />
                        </Grid>
                    </Grid>
                    <Grid className={styles.infoInput} container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" className={styles.subTitle}>PASSWORD CHANGE</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="currentPassword" onChange={handleChange} value={formData.currentPassword} margin="dense" type="text " label="Current password (leave blank to leave unchanged) " fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="newPassword" onChange={(e) => {
                                handleChange(e);
                                handleValidatePasswords();
                            }} value={formData.newPassword} margin="dense" type="text" label="New password (leave blank to leave unchanged) " fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="confirmPassword" onChange={(e) => {
                                handleChange(e);
                                handleValidatePasswords();
                            }} value={formData.confirmPassword} margin="dense" type="text" label="Confirm new password " fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <Link href={LINKS.ACCOUNT_DETAILS}>
                                <BaseButton onClick={updateUserHandler} variant="text" className={styles.saveChangesButton}>
                                    SAVE CHANGES
                                </BaseButton>
                            </Link>
                        </Grid>
                    </Grid>
                </>
            }
        </Box>
    );
};

export default ProfileAccountDetailContent;
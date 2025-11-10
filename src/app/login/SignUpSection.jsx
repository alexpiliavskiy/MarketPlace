"use client";

import React, { useState } from 'react';
import {useRouter} from "next/navigation";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import Snack from "./Snack";
import authService from "@/services/auth.service";

const SignUpSection = ({ open, handleClose }) => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        secondName: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        emailError: false,
        passwordError: false
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const router = useRouter();

    const validateEmail = (value) => !value.trim().includes("@");
    const validatePassword = (value) => value.trim().length < 8;

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value
        }));

        if (id === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                emailError: validateEmail(value)
            }));
        }

        if (id === "password") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                passwordError: validatePassword(value)
            }));
        }
    };

    const handleSignUp = async () => {
        const { email, password } = formValues;
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        setErrors({ emailError, passwordError });

        try {
            if (!emailError && !passwordError) {
                await authService.registration(formValues);
                router.push("/success-registration");
                setFormValues({
                    firstName: "",
                    secondName: "",
                    email: "",
                    password: ""
                });
                setSnackbarOpen(true);
                handleClose();
            }
        }catch (e) {
            console.error(e)
        }
    };

    const canSignUp = !errors.emailError && !errors.passwordError &&
        formValues.email.trim() !== '' && formValues.password.trim() !== '';

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">Sign Up to buy products</Typography>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="firstName"
                        label="First name"
                        type="text"
                        fullWidth
                        value={formValues.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        id="secondName"
                        label="Second name"
                        type="text"
                        fullWidth
                        value={formValues.secondName}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        error={errors.emailError}
                        helperText={errors.emailError ? "Please enter a valid email address" : " "}
                    />
                    <TextField
                        margin="none"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={formValues.password}
                        onChange={handleChange}
                        error={errors.passwordError}
                        helperText={errors.passwordError ? "Password must be at least 8 characters" : " "}
                        sx={{ marginTop: "none" }}
                    />
                    <Typography color="#767676" sx={{ fontSize: "14px", lineHeight: "24px", textAlign: "left" }}>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleSignUp} color="inherit" variant="outlined" disabled={!canSignUp}>
                        Sign Up
                    </Button>
                </DialogActions>
            </Dialog>
            <Snack open={snackbarOpen} handleClose={() => setSnackbarOpen(false)} />
        </>
    );
};

export default SignUpSection;

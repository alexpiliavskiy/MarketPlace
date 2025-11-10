"use client";

import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import {useDispatch} from "react-redux";
import {addCurrentUser} from "@/store/actions";
import Snack from "./Snack";
import Check from "@/app/login/Check";
import authService from "@/services/auth.service";
import userService from "@/services/user.service";
import {useRouter} from "next/navigation";
import {ROLE} from "@/consts/roles.const";

const LogInSection = ({ open, handleClose, onSwitchToSignUp }) => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        emailError: false,
        passwordError: false
    });
    const dispatch = useDispatch();
    const router = useRouter();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

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

    const handleSignIn = async () => {
        const { email, password } = formValues;
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({ emailError, passwordError });

        if (!emailError && !passwordError) {
            const {accessToken, refreshToken} = await authService.login(formValues);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            const currentUser = await userService.getCurrentUser();
            if(currentUser.roles.find(role => role.name === ROLE.VENDOR)) {
                router.push("/admin/vendor");
            }  else if(currentUser.roles.find(role => role.name === ROLE.ADMIN)) {
                router.push("/admin/admin");
            } else if(currentUser.roles.find(role => role.name === ROLE.BUYER)) {
                router.push("/");
            }
            dispatch(addCurrentUser(currentUser));
            setFormValues({
                email: '',
                password: ''
            });
            setSnackbarOpen(true);
            handleClose();
        }
    };

    const canSignIn = !errors.emailError && !errors.passwordError &&
        formValues.email.trim() !== '' && formValues.password.trim() !== '';

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">Log In to buy products</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        error={errors.emailError}
                        helperText={errors.emailError ? "Please enter a valid email address" : " "}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={formValues.password}
                        onChange={handleChange}
                        required
                        error={errors.passwordError}
                        helperText={errors.passwordError ? "Password must be at least 8 characters" : " "}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Check label="Remember me" />
                        <Button sx={{ color: "#222222", fontSize: 14, '&:hover': { backgroundColor: "transparent", textDecoration: 'underline' } }}>
                            Lost password?
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleSignIn} color="inherit" variant="outlined" disabled={!canSignIn}>
                        Log In
                    </Button>
                </DialogActions>
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="body2">
                        No account yet?{' '}
                        <Button
                            color="inherit"
                            variant="text"
                            sx={{
                                fontWeight: 500,
                                fontSize: 14,
                                textTransform: "uppercase",
                                '&:hover': {
                                    backgroundColor: "transparent",
                                    textDecoration: 'underline'
                                }
                            }}
                            onClick={onSwitchToSignUp}
                        >
                            Create Account
                        </Button>
                    </Typography>
                </Box>
            </Dialog>
            <Snack open={snackbarOpen} handleClose={() => setSnackbarOpen(false)} />
        </>
    );
};

export default LogInSection;

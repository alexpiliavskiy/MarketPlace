'use client';
import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import LogInSection from "./LogInSection";
import SignUpSection from "./SignUpSection";

const LoginPage = () => {
    const [logInOpen, setLogInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

    const handleLogInOpen = () => {
        setLogInOpen(true);
    }
    const handleSignUpOpen = () => {
        setSignUpOpen(true);
    }

    const handleClose = () => {
        setLogInOpen(false);
        setSignUpOpen(false);
    }

    const switchToSignUp = () => {
        setLogInOpen(false);
        setSignUpOpen(true);
    }

    return (
        <Box sx={{textAlign: 'center', mt: 20, pb: "100px"}}>
            <Typography variant="h2" sx={{mb: 4}}>Welcome to store!</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: 10}}>
                <Button color="inherit" variant="text" sx={{
                    fontWeight: 500, fontSize: 16, textTransform: "uppercase", '&:hover': {
                        color: "#222222",
                        backgroundColor: "transparent",
                        textDecoration: "underline"
                    },
                }} onClick={handleLogInOpen}>Log In</Button>
                <LogInSection open={logInOpen} handleClose={handleClose} onSwitchToSignUp={switchToSignUp}/>
                <Button color="inherit" variant="text" sx={{
                    fontWeight: 500, fontSize: 16, textTransform: "uppercase", '&:hover': {
                        color: "#222222",
                        backgroundColor: "transparent",
                        textDecoration: "underline"
                    },
                }} onClick={handleSignUpOpen}>Sign Up</Button>
                <SignUpSection open={signUpOpen} handleClose={handleClose}/>
            </Box>
        </Box>
    );
};

export default LoginPage;
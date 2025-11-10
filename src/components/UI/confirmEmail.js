"use client";

import React, {useEffect, useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import styles from "@/components/UI/confirmEmail.module.scss";
import authService from "@/services/auth.service";
import {useRouter, useSearchParams} from "next/navigation";

const ConfirmEmail = () => {
    const [error, setError] = useState(false);
    const searchParams = useSearchParams();

    const confirmEmail = async () => {
        try {
            setError(false);
            const params = new URLSearchParams(searchParams.toString());
            await authService.confirmEmail(params.get("token"));
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }
    useEffect(() => {
        confirmEmail()
    }, [])

    return (
        <Box pt="200px" component="section" className={styles.confirmEmailContainer}>
            <Container>
                {!error ? (
                    <>
                        <Typography className={styles.subTitle} variant="h5">Thank you,</Typography>
                        <Typography className={styles.mainTitle} variant="h5">Confirm email successfully.</Typography>
                    </>
                ) : (
                    <Typography className={styles.token} variant="h5">Time for token expired</Typography>
                )}
            </Container>
        </Box>
    );
};

export default ConfirmEmail;
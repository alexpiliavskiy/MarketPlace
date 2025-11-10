"use client";
import React, {useMemo, useState} from 'react';
import Link from "next/link";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import MenuProfileSection from "@/components/ProfileMainSection/MenuProfileSection";
import {PATHS} from "@/consts/path.const";
import {useDispatch, useSelector} from "react-redux";
import {addCurrentUser} from "@/store/actions";
import {useRouter} from "next/navigation";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/ProfileMainSection/ProfileMainSection.module.scss";

const ProfileMainSection = () => {
    const [loading, setLoading] = useState(true);
    const currentUser = useSelector((state) => state.addUser.addCurrentUser);
    const dispatch = useDispatch();
    const router = useRouter();

    const isUser = useMemo(() => {
        try {
            setLoading(true);
            return currentUser;
        } catch (e) {
            console.error(e);
        } finally {
            setTimeout(() => setLoading(false), 1000);
        }
    }, [currentUser]);

    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        dispatch(addCurrentUser(null));
        router.push('/login');
    }

    return (
        <>
            {isUser && (
                <Box component="section">
                    {loading ? <Loader /> :
                        <Container>
                            <Grid container>
                                <Grid item xs={12} lg={12} sm={12}>
                                    <Typography variant="h3" className={styles.mainTitle}>MY ACCOUNT</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} md={3} lg={4}>
                                    <MenuProfileSection />
                                </Grid>
                                <Grid item xs={12} md={9} lg={8} className={styles.contentContainer}>
                                    <Typography variant="body1" className={styles.welcomeMessage}>
                                        Hello <strong className={styles.userName}>{`${currentUser.firstName} ${currentUser.secondName} `}</strong>
                                        (not <strong className={styles.userName}>{`${currentUser.firstName} ${currentUser.secondName}`}</strong>?
                                        <Button onClick={handleLogOut} className={styles.link}>Log out</Button>)
                                    </Typography>
                                    <Typography variant="body2" className={styles.linkMessage}>
                                        From your account dashboard you can view your{' '}
                                        <Link href={PATHS.ORDERS} className={styles.link}>recent orders</Link>, manage your{' '}
                                        <Link href={PATHS.TRACKING} className={styles.link}>shipping and billing addresses</Link>, and{' '}
                                        <Link href={PATHS.ACCOUNT_DETAILS} className={styles.link}>edit your password and account details</Link>.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    }
                </Box>
            )}
        </>
    );
};

export default ProfileMainSection;
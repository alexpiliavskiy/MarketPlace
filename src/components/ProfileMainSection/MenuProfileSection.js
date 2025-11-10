"use client";
import React from 'react';
import {Box, List, ListItem, ListItemText} from "@mui/material";
import {LINKS} from "@/consts/path.const";
import {addCurrentUser} from "@/store/actions";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";
import authService from "@/services/auth.service";
import styles from "@/components/ProfileMainSection/MenuProfileSection.module.scss";

const MenuProfileSection = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleLogOut = async () => {
        const refreshToken =  localStorage.getItem("refreshToken");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(addCurrentUser(null));
        router.replace('/login');
        await authService.logout(refreshToken);
    }

    return (
        <Box component="section">
            <List className={styles.linkItem}>
                <ListItem component="a" href={LINKS.DASHBOARD} className={styles.listItemTitle}>
                    <ListItemText primary="DASHBOARD" />
                </ListItem>
                <ListItem component="a" href={LINKS.ORDERS} className={styles.listItemTitle}>
                    <ListItemText primary="ORDERS" />
                </ListItem>
                <ListItem component="a" href={LINKS.ADDRESSES} className={styles.listItemTitle}>
                    <ListItemText primary="ADDRESSES" />
                </ListItem>
                <ListItem component="a" href={LINKS.ACCOUNT_DETAILS} className={styles.listItemTitle}>
                    <ListItemText primary="ACCOUNT DETAILS" />
                </ListItem>
                <ListItem component="a" href={LINKS.WISHLIST} className={styles.listItemTitle}>
                    <ListItemText primary="WISHLIST" />
                </ListItem>
                <ListItem component="a" onClick={handleLogOut} className={styles.listItemTitle}>
                    <ListItemText primary="LOGOUT" />
                </ListItem>
            </List>
        </Box>
    );
};

export default MenuProfileSection;
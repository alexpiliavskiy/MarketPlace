"use client";

import React, {useMemo, useState} from 'react';
import {
    Menu,
    MenuItem,
    IconButton,
    Typography,
    Box,
    Button,
    Container,
} from '@mui/material';
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {AccountCircle} from '@mui/icons-material';
import {addCurrentUser} from "@/store/actions";
import {LINKS} from "@/consts/path.const";
import {ROLE} from "@/consts/roles.const";
import {useRouter} from "next/navigation";
import authService from "@/services/auth.service";
import styles from '@/components/UserProfileMenuSection/UserProfileMenuSection.module.scss';


const UserProfileMenuSection = () => {
    const [anchorEl, setAnchorEl] = useState("");
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.addUser.addCurrentUser);
    const router = useRouter();

    const isBuyerUser = useMemo(() => {
        return currentUser?.roles?.find(role => role.name === ROLE.BUYER);
    }, [currentUser]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut =  async () => {
        const refreshToken =  localStorage.getItem("refreshToken");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(addCurrentUser(null));
        router.replace('/login');
        await authService.logout(refreshToken);
    }

    return (
        <Box component="section">
            <Container>
                <IconButton
                    onClick={handleClick}
                    size="large"
                    edge="end"
                    aria-controls="account-menu"
                    aria-haspopup="true"
                    className={styles.menuIcon}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    className={styles.menuList}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                        <MenuItem>
                            <Link href={LINKS.DASHBOARD} passHref>
                                <Typography variant="body1">My account</Typography>
                            </Link>
                        </MenuItem>
                    {isBuyerUser && [
                        <MenuItem key="basket">
                            <Link href={`/shop/basket`} passHref>
                                <Typography variant="body1">Basket</Typography>
                            </Link>
                        </MenuItem>,
                        <MenuItem key="check">
                            <Link href={`/shop/check`} passHref>
                                <Typography variant="body1">Checkout</Typography>
                            </Link>
                        </MenuItem>,
                        <MenuItem key="wishlist">
                            <Link href={LINKS.WISHLIST} passHref>
                                <Typography variant="body1">Wishlist</Typography>
                            </Link>
                        </MenuItem>,
                        <MenuItem key="tracking">
                            <Link href={`/shop/tracking`} passHref>
                                <Typography variant="body1">Order Tracking</Typography>
                            </Link>
                        </MenuItem>,
                    ]}

                    <MenuItem>
                        <Button onClick={handleLogOut} className={styles.btnLogOut}>Log out</Button>
                    </MenuItem>
                </Menu>
            </Container>
        </Box>
    );
};

export default UserProfileMenuSection;
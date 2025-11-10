"use client";

import React, {useEffect, useMemo, useState} from 'react';
import {
    AppBar,
    Badge,
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FavoriteBorder, PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import userService from "@/services/user.service";
import {addCurrentUser} from "@/store/actions";
import UserProfileMenuSection from "@/components/UserProfileMenuSection/UserProfileMenuSection";
import basketService from "@/services/basket.service";
import {setBasketProducts} from "@/store/basket/actions";
import {setWishlistProducts} from "@/store/wishlist/actions";
import wishlistService from "@/services/wishlist.service";
import {MENU} from "@/consts/menu.const";
import {ROLE} from "@/consts/roles.const";
import styles from "./Header.module.scss";

const Header = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const currentUser = useSelector((state) => state.addUser.addCurrentUser);
    const basketProducts = useSelector(state => state.basket.products);
    const wishlistProducts = useSelector(state => state.wishlist.products);

    const menuItems = useMemo(() => {
        if (!currentUser || currentUser.roles.find(role => role.name === ROLE.BUYER)) {
            return MENU.BUYER;
        } else if (currentUser.roles.find(role => role.name === ROLE.VENDOR)) {
            return MENU.VENDOR;
        } else if (currentUser.roles.find(role => role.name === ROLE.ADMIN)) {
            return MENU.ADMIN;
        } else {
            return [];
        }
    }, [currentUser]);

    const isBuyerUser = useMemo(() => {
        return currentUser?.roles?.find(role => role.name === ROLE.BUYER);
    }, [currentUser]);
    
    const handlePersonClick = () => {
        router.push('/login');
    };

    const fetchCurrentUser = async () => {
        const token = localStorage.getItem('accessToken')
        if (!currentUser && token){
            const currentUser = await userService.getCurrentUser();
            dispatch(addCurrentUser(currentUser));
        }
    };

    const fetchBasket = async () => {
        if (currentUser) {
            const basketProducts = await basketService.getItems();
            dispatch(setBasketProducts(basketProducts));
        }
    };

    const fetchWishlist = async () => {
        if (currentUser) {
            const getWishlistProducts = await wishlistService.getItems();
            dispatch(setWishlistProducts(getWishlistProducts));
        }
    };
    //TODO Fix this memo
    const countProductsInBasket = useMemo(() => {
        return basketProducts.reduce((total, item) => total + item.count, 0);
    }, [basketProducts]);

    const countProductsToWishlist = useMemo(() => {
        return wishlistProducts.length;
    }, [wishlistProducts]);

    useEffect(() => {
        Promise.all([fetchCurrentUser(), fetchBasket(), fetchWishlist()]);
    }, [dispatch, currentUser]);


    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <AppBar  sx={{ backgroundColor: 'white' }}>
            <Container  className={styles.header__container}>
                <IconButton edge="start" aria-label="menu" className={styles.header__logo}>
                    <Link href={"/"}><img src="/logo.jpeg" alt="Logo image"/></Link>
                </IconButton>
                <Box className={styles.header__menu}>
                    {menuItems.map((item) => (
                        <Link key={item.id} href={`${item.link.toLowerCase()}`} className={styles.header__button}>{item.label}</Link>
                    ))}
                </Box>
                <Box className={styles.header__icons}>
                    <IconButton aria-label="search" className={styles.header__icon}>
                        <SearchIcon />
                    </IconButton>
                    {!currentUser && (
                        <IconButton aria-label="person" className={styles.header__icon} onClick={handlePersonClick}>
                            <PersonOutlined />
                        </IconButton>
                    )}
                    {currentUser && (
                    <>
                        <UserProfileMenuSection />
                        {isBuyerUser && (
                            <>
                                <IconButton aria-label="favorite" className={styles.header__icon}>
                                    <Link href={`/profile/wishlist`} passHref>
                                        <Badge badgeContent={countProductsToWishlist} color="primary" className={styles.badgeIcon}>
                                            <FavoriteBorder />
                                        </Badge>
                                    </Link>
                                </IconButton>
                                <IconButton aria-label="shopping cart" className={styles.header__icon}>
                                    <Link href={`/shop/basket`} passHref>
                                        <Badge badgeContent={countProductsInBasket} color="primary" className={styles.badgeIcon}>
                                            <ShoppingBagOutlined />
                                        </Badge>
                                    </Link>
                                </IconButton>
                            </>
                        )}
                    </>
                    )}
                    <IconButton
                        edge="end"
                        aria-label="menu"
                        className={styles.header__burgerMenu}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Container>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{sx: {width: 200}}}
            >
                <Box className={styles.drawerHeader}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        className={styles.closeButton}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List className={styles.header__list}>
                    {menuItems.map((item) => (
                        <ListItem key={item.id} onClick={toggleDrawer(false)}>
                            <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Header;

"use client";

import React, { useState } from 'react';
import {
    Box,
    Button,
    Container, Divider,
    Grid, IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem, Select,
    TextField,
    Typography
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

import { styled } from '@mui/material/styles';
import styles from "@/components/Footer/Footer.module.scss";
import {color} from "@mui/system";

const Footer = () => {
    const [country, setCountry] = useState('United Kingdom');
    const [currency, setCurrency] = useState('USD');

    const countries = [
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States', label: 'United States' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Ukraine', label: 'Ukraine' },
    ];

    const currencies = [
        { value: 'USD', label: '$ USD' },
        { value: 'EUR', label: '€ EUR' },
        { value: 'GBP', label: '£ GBP' },
        { value: 'UAN', label: '₴ UAN' },
    ];

    const socialIcons = [
        { component: <FacebookIcon />, key: 'facebook' },
        { component: <TwitterIcon />, key: 'twitter' },
        { component: <InstagramIcon />, key: 'instagram' },
        { component: <YouTubeIcon />, key: 'youtube' },
        { component: <PinterestIcon />, key: 'pinterest' },
    ];

    const infoItems = [
        {
            name: '1418 River Drive, Suite 35 Cottonhall, CA 9622\nUnited States',
            href: '/'
        },
        {
            email: 'sale@uomo.com',
            href: '/'
        },
        {
            phone: '+1 246-345-0695',
            href: '/'
        }
    ];

    const companyItems = [
        { name: 'About Us', href: '/' },
        { name: 'Careers', href: '/' },
        { name: 'Affiliates', href: '/' },
        { name: 'Blog', href: '/' },
        { name: 'Contact Us', href: '/' }
    ];

    const shopItems = [
        { name: 'New Arrivals', href: '/' },
        { name: 'Accessories', href: '/' },
        { name: 'Men', href: '/' },
        { name: 'Women', href: '/' },
        { name: 'Shop All', href: '/' }
    ];

    const helpItems = [
        { name: 'Customer Service', href: '/' },
        { name: 'My Account', href: '/' },
        { name: 'Find a Store', href: '/' },
        { name: 'Legal & Privacy', href: '/' },
        { name: 'Contact', href: '/' },
        { name: 'Gift Card', href: '/' }
    ];

    const timeItems = [
        { name: 'Mon – Fri: 8AM – 9PM', href: '/' },
        { name: 'Sat: 9 AM – 8 PM', href: '/' },
        { name: 'Sun: Closed', href: '/' }
    ];

    return (
        <Box className={`${styles.footerSection} ds`}>
            <Container>
                <Grid container spacing={3} className={styles.topSection}>
                    <Grid item xs={12} md={12} className={styles.subscribe}>
                        <Typography variant="h3" className={styles.subscribeTitle}>GET 10% OFF</Typography>
                        <Typography variant="body1" className={styles.subscribeText}>Be the first to get the latest news about trends, promotions, and much more!</Typography>
                        <Grid container className={styles.subscribeForm} spacing={2}>
                            <Grid item xs={12} lg={6} md={6} sm={12}>
                                <TextField
                                    label="Email" variant="outlined" placeholder="Your email address" className={styles.emailInput} />
                            </Grid>
                            <Grid item xs={12} lg={2} md={2} sm={12}>
                                <Button variant="text" className={styles.joinButton}>Join</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={styles.bottomSection} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} lg={4}>
                        <Box className={styles.imageLogo}>
                            <img src="/logo.png" alt="logo" />
                        </Box>
                        <List>
                            {infoItems.map((info, index) => (
                                <ListItem key={index}>
                                    <Link className={styles.infoItem} href={info.href} underline="hover">
                                        <ListItemText primary={info.name} />
                                        <ListItemText primary={info.email} />
                                        <ListItemText primary={info.phone} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                        <Box className={styles.socialIcons}>
                            {socialIcons.map((icon) => (
                                <IconButton className={styles.iconBtn} color="inherit" key={icon.key}>
                                    {icon.component}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={2}>
                        <Typography variant="h6" className={styles.sectionTitle}>COMPANY</Typography>
                        <List>
                            {companyItems.map((company, index) => (
                                <ListItem key={index}>
                                    <Link className={styles.linkItem} href={company.href} underline="hover">
                                        <ListItemText primary={company.name} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={2}>
                        <Typography variant="h6" className={styles.sectionTitle}>SHOP</Typography>
                        <List>
                            {shopItems.map((shop, index) => (
                                <ListItem key={index}>
                                    <Link className={styles.linkItem} href={shop.href} underline="hover">
                                        <ListItemText primary={shop.name} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={2}>
                        <Typography variant="h6" className={styles.sectionTitle}>HELP</Typography>
                        <List>
                            {helpItems.map((help, index) => (
                                <ListItem key={index}>
                                    <Link className={styles.linkItem} href={help.href} underline="hover">
                                        <ListItemText primary={help.name} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={2}>
                        <Typography variant="h6" className={styles.sectionTitle}>OPENING TIME</Typography>
                        <List>
                            {timeItems.map((time, index) => (
                                <ListItem key={index}>
                                    <Typography className={styles.timeItem} variant="h6">
                                        <ListItemText primary={time.name} />
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
                <Box>
                    <Divider className={styles.lineDivider} />
                </Box>
                <Grid container spacing={3} className={styles.footerBottom}>
                    <Grid item xs={12} md={6} className={styles.copyright}>
                        <Typography variant="body1">
                            ©2024 Uomo
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.additionalInfo}>
                        <Box  className={styles.selectWrapper}>
                            <Select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className={styles.select}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            backgroundColor: '#222222',
                                            color: '#FFFFFF',
                                        },
                                    },
                                }}
                                sx={{
                                    border: 'none',
                                    '& .MuiSelect-icon': {
                                        color: '#FFFFFF',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                }}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.value} value={country.value}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>

                            <Select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className={styles.select}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            backgroundColor: '#222222',
                                            color: '#FFFFFF',
                                        },
                                    },
                                }}
                                sx={{
                                    border: 'none',
                                    '& .MuiSelect-icon': {
                                        color: '#FFFFFF',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                }}
                            >
                                {currencies.map((currency) => (
                                    <MenuItem key={currency.value} value={currency.value}>
                                        {currency.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
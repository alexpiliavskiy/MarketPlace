"use client";

import React, {useState, useEffect} from 'react';
import Link from "next/link";
import {Box, Grid, Button, Typography, IconButton, MenuItem, Select, Divider} from '@mui/material';
import FluidContainer from "@/components/FluidContainer";
import FilterDrawerSection from "@/components/FilterDrawerSection/FilterDrawerSection";
import styles from "@/components/BreadcrumbSection/BreadcrumbSection.module.scss";

const BreadcrumbSection = ({onViewChange}) => {
    const [sortTitle, setSortTitle] = useState("DEFAULT SORTING");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const sortItems = [
        {value: 'DEFAULT SORTING', label: 'DEFAULT SORTING'},
        {value: 'FEATURED', label: 'FEATURED'},
        {value: 'BEST SELLING', label: 'BEST SELLING'},
        {value: 'Alphabetically, A-Z', label: 'Alphabetically, A-Z'},
        {value: 'Alphabetically, Z-A', label: 'Alphabetically, Z-A'},
        {value: 'Price, low to high', label: 'Price, low to high'},
        {value: 'Price, high to low', label: 'Price, high to low'},
        {value: 'Date, old to new', label: 'Date, new to old'},
        {value: 'Date, new to old', label: 'Date, new to old'},
    ];

    return (
        <Box component="section" pt="35px">
            <FluidContainer>
                <Grid container>
                    <Grid className={styles.leftBreadcrumbContainer} item xs={12} sm={12} md={3} lg={2}>
                        <Button className={styles.leftBtn} variant="text">
                            <Link href={"/"} passHref>
                                HOME
                            </Link>
                        </Button>
                        <Divider className={styles.rotateDivider}/>
                        <Button className={styles.leftBtn} variant="text">
                            <Link href={"/shop"} passHref>
                                THE SHOP
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={10}>
                        {isClient && (
                            <Grid container alignItems="center" justifyContent="flex-end">
                                <Grid className={styles.selectWrapper} item>
                                    <Select
                                        value={sortTitle}
                                        onChange={(e) => setSortTitle(e.target.value)}
                                        className={styles.select}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    backgroundColor: '#fff',
                                                    color: '#222222',
                                                },
                                            },
                                        }}
                                        sx={{
                                            border: 'none',
                                            '& .MuiSelect-icon': {
                                                color: '#000',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none',
                                            },
                                        }}
                                    >
                                        {sortItems.map((sort) => (
                                            <MenuItem key={sort.value} value={sort.value}>
                                                {sort.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Divider orientation="vertical" className={styles.verticalDivider}/>
                                <Grid item>
                                    <Grid container className={styles.rightBreadcrumbContainer} alignItems="center">
                                        <Typography variant="body1">VIEW</Typography>
                                        <Button onClick={() => onViewChange(2)} className={styles.rightBtn}
                                                variant="text">2</Button>
                                        <Button onClick={() => onViewChange(3)} className={styles.rightBtn}
                                                variant="text">3</Button>
                                        <Button onClick={() => onViewChange(4)} className={styles.rightBtn}
                                                variant="text">4</Button>
                                    </Grid>
                                </Grid>
                                <Divider orientation="vertical" className={styles.verticalDivider}/>
                                <Grid className={styles.filter} item>
                                    <IconButton className={styles.iconBtn}>
                                        <FilterDrawerSection/>
                                        {/*<Button onClick={() => FilterPanel} variant="text" className={styles.filterText}>FILTER</Button>*/}
                                    </IconButton>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </FluidContainer>
        </Box>
    );
};

export default BreadcrumbSection;

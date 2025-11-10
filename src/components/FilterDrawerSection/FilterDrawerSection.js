"use client";

import React, {useContext, useEffect, useState} from 'react';
import {IconButton, Typography, Box} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import CategoryFilterSection from "@/components/FilterDrawerSection/CategoryFilterSection";
import ColorsFilterSection from "@/components/FilterDrawerSection/ColorsFilterSection";
import SizesFilterSection from "@/components/FilterDrawerSection/SizesFilterSection";
import BrandsFilterSection from "@/components/FilterDrawerSection/BrandsFilterSection";
import PriceFilterSection from "@/components/FilterDrawerSection/PriceFilterSection";
import ResetFiltersSection from "@/components/FilterDrawerSection/ResetFiltersSection";
import {ServerOptions} from "@/context/serverOptions.context";
import categoriesService from "@/services/categories.service";
import sizesService from "@/services/sizes.service";
import colorsService from "@/services/colors.service";
import brandsService from "@/services/brands.service";
import styles from "@/components/FilterDrawerSection/FilterDrawerSection.module.scss";

export default function FilterDrawerSection() {
    const [open, setOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [searchInputCheckbox, setSearchInputCheckbox] = useState([]);
    const { serverOptions, setServerOptions } = useContext(ServerOptions);
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [price, setPrice] = useState({ minPrice: +serverOptions.price[0], maxPrice: +serverOptions.price[1] });
    const fetchCategories = async () => {
        const data = await categoriesService.getAll();
        setCategories(data);
    }

    const fetchSizes = async () => {
        const data = await sizesService.getAll();
        setSizes(data);
    }

    const fetchColors = async () => {
        const data = await colorsService.getAll();
        setColors(data);
    }

    const fetchBrands = async () => {
        const data = await brandsService.getAll();
        setBrands(data);
    }

    useEffect( () => {
        fetchCategories();
        fetchSizes();
        fetchColors();
        fetchBrands();
    }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleColorChange = (newSlug) => {
        if (serverOptions.colors.includes(newSlug)) {
            setServerOptions(prev => ({...prev, colors: prev.colors.filter(color => color !== newSlug)}))
        } else {
            setServerOptions(prev => ({...prev, colors: [...prev.colors, newSlug]}))
        }
    };

    const handleChangeInput = (event) => {
        setSearchInput(event.target.value);
    };

    const handleChangeInputCheckbox = (newSlug) => {
        if (serverOptions.brands.includes(newSlug)) {
            setServerOptions(prev => ({...prev, brands: prev.brands.filter(brand => brand !== newSlug)}))
        } else {
            setServerOptions(prev => ({...prev, brands: [...prev.brands, newSlug]}))
        }
    };

    const filteredBrands = brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleChangeRange = (newValue) => {
        setServerOptions(prev => ({...prev, price: newValue}))
    };

    const handleChangeQuaryCategories = (slug) => {
        setServerOptions(prev => ({
            ...prev,
            category: slug
        }))
    };

    const toggleSize = (newSlug) => {
        if (serverOptions.sizes.includes(newSlug)) {
            setServerOptions(prev => ({...prev, sizes: prev.sizes.filter(size => size !== newSlug)}))
        } else {
            setServerOptions(prev => ({...prev, sizes: [...prev.sizes, newSlug]}))
        }
    };

    const resetFilters = () => {
        setSearchInput("");
        setServerOptions(prev => ({
            ...prev,
            category: null,
            colors: [],
            sizes: [],
            brands: [],
            price: [price.minPrice, price.maxPrice]
        }))
    };

    const DrawerList = (
        <Box className={styles.mainContainer} component="section" sx={{width: 420}} role="list">
            <Box className={styles.titleContainer}>
                <Typography className={styles.title} variant="h5">FILTER BY</Typography>
                <IconButton className={styles.closeIcon} onClick={toggleDrawer(false)}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <CategoryFilterSection handleChangeQuaryCategories={handleChangeQuaryCategories} categories={categories} />
            <ColorsFilterSection  colors={colors} activeColors={serverOptions.colors} handleColorChange={handleColorChange} />
            <SizesFilterSection sizes={sizes} activeSizes={serverOptions.sizes} toggleSize={toggleSize} />
            <BrandsFilterSection activeBrands={serverOptions.brands} filteredBrands={filteredBrands} searchInput={searchInput} searchInputCheckbox={searchInputCheckbox}
                                 handleChangeInputCheckbox={handleChangeInputCheckbox} handleChangeInput={handleChangeInput} />
            <PriceFilterSection rangePrice={price} activePrice={serverOptions.price} handleChangeRange={handleChangeRange} />
            <ResetFiltersSection resetFilters={resetFilters} />
        </Box>
    );

    return (
        <Box component="section" className={styles.filteredContainer}>
            <FilterListIcon className={styles.filterIcon} onClick={toggleDrawer(true)}/>
            <Button variant="text" onClick={toggleDrawer(true)} className={styles.filterText}>FILTER</Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>{DrawerList}</Drawer>
        </Box>
    );
}
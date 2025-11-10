"use client";

import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import {useDispatch} from "react-redux";

import BannerTitleShopSection from "@/components/BannerTitleShopSection/BannerTitleShopSection";
import BreadcrumbSection from "@/components/BreadcrumbSection/BreadcrumbSection";
import ProductItem from "@/components/ShopPageSection/ProductItem";
import productsService from "@/services/products.service";
import wishlistService from "@/services/wishlist.service";
import basketService from "@/services/basket.service";
import {addProductToBasket} from "@/store/basket/actions";
import {addProductTowWishlist} from "@/store/wishlist/actions";
import {Pagination} from "@mui/lab";
import {useRouter, useSearchParams} from 'next/navigation';
import {ServerOptions} from "@/context/serverOptions.context";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/ShopPageSection/CategoryShopSection.module.scss";

const LIMIT_PRODUCTS  = 5

const ProductItemSection = () => {
    const [viewCount, setViewCount] = useState(4);
    const [products, setProducts] = useState({
        count: 0,
        rows: [],
    });
    const [loading, setLoading] = useState(true);
    const [serverOptions, setServerOptions] = useState({
        page: 1,
        category: null,
        colors: [],
        sizes: [],
        brands: [],
        price: [0, 10000]
    });
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();

    const fetchProducts = async (options) => {
        try {
            setLoading(true);
            const data = await productsService.getAll(options);
            setProducts(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const fetchPrices = async () => {
        const data = await productsService.getMinMaxPrice();
        setServerOptions(prev => {
            return {
                ...prev,
                price: [+data.minPrice, +data.maxPrice]
            }
        });
    };

    useEffect(() => {
        const tempObj = {}
        const params = new URLSearchParams(searchParams.toString());
        const initialOptions = { ...serverOptions };

        for (const key of Object.keys(serverOptions)) {
            if (params.has(key)) {
                initialOptions[key] = key === 'colors' || key === 'price' || key === 'sizes' || key === 'brands'
                    ? params.get(key).split(',')
                    : params.get(key);
            }
        }

        setServerOptions(initialOptions);
        fetchProducts(initialOptions);
        fetchPrices();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams();

        for (const [key, value] of Object.entries(serverOptions)) {
            if (value !== null && value.length > 0) {
                params.set(key, Array.isArray(value) ? value.join(',') : value);
            }
        }

        router.push(`?${params.toString()}`);
        fetchProducts(serverOptions);
    }, [serverOptions]);

    const handleChange = (event, value) => {
      setServerOptions(prev => {
          return {
              ...prev,
              page: value,
          }
      })
    };

    const handleViewChange = (count) => {
        setViewCount(count);
    };

    const handleAddToWishlist = async (productId) => {
        try {
            const addNewProduct = await wishlistService.addItem(productId);
            dispatch(addProductTowWishlist(addNewProduct));
        } catch(e) {
            console.error(e)
        }
    };

    const handleAddToBasket = async (productId, size, color) => {
        try {
            const newProduct = await basketService.addItem(productId, 1, size, color);
            dispatch(addProductToBasket(newProduct));
        } catch(e) {
            console.error(e)
        }
    };

    const getGridColumns = () => {
        switch (viewCount) {
            case 2:
                return 6;
            case 3:
                return 4;
            case 4:
                return 3;
            default:
                return 3;
        }
    };

    return (
        <Box component="section">
            {loading ? <Loader /> :
                <ServerOptions.Provider value={{serverOptions, setServerOptions}}>
                    <BannerTitleShopSection />
                    <BreadcrumbSection
                        viewCount={viewCount}
                        onViewChange={handleViewChange} />
                    <Grid container spacing={4} mt={4} pb="20px">
                        {products.rows.map((product, index) => (
                            <Grid item xs={12} sm={6} md={getGridColumns()}  key={index}>
                                <ProductItem product={product} handleAddToWishlist={handleAddToWishlist} handleAddToBasket={handleAddToBasket} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box>
                        <Pagination count={Math.ceil(products.count / LIMIT_PRODUCTS)} className={styles.pagination} page={serverOptions.page} onChange={handleChange} />
                    </Box>
                </ServerOptions.Provider>
            }
        </Box>
    );
};

export default ProductItemSection;
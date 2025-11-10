"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import {Rating} from "@mui/lab";
import DOMPurify from 'dompurify';
import ImageSlider from "@/components/SliderComponent/ImageSlider";
import ProductMeta from "@/components/ProductMeta/ProductMeta";
import SingleTabSection from "@/components/SingleTabSection/SingleTabSection";
import RelatedProductsSlider from "@/components/RelatedProductsSlider/RelatedProductsSlider";
import SizeGuideModal from "@/components/SizeGuideModal/SizeGuideModal";
import productsService from "@/services/products.service";
import wishlistService from "@/services/wishlist.service";
import {addProductTowWishlist} from "@/store/wishlist/actions";
import basketService from "@/services/basket.service";
import {addProductToBasket} from "@/store/basket/actions";
import Loader from "@/components/Loader/Loader";
import styles from "@/components/DetailPageShopCategorySection/DetailPageShopCategory.module.scss";

const DetailPageShopCategory = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({
        images: [],
        productComments: []
    });
    const [formData, setFormData] = useState({
        content: "",
        rate: null,
        productId: "",
        userId: "",
    })
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const dispatch = useDispatch();
    const safeDescription = DOMPurify.sanitize(product.description);
    const currentUser = useSelector((state) => state.addUser.addCurrentUser);

    const fetchOneProduct = async (productId) => {
        try {
            setLoading(true);
            const data = await productsService.getOneProduct(productId);
            setProduct(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const handleRatingChange = (event, newValue) => {
        setFormData(prev => ({
            ...prev,
            rate: newValue
        }));
    }

    const submitComment = async () => {
        try {
            const newComment = {
                productId: product.id,
                content: formData.content,
                rate: formData.rate,
            };

           const createComment =  await productsService.addComment(newComment);

            setProduct(prev => ({
                ...prev,
                productComments: [...prev.productComments, createComment],
            }));

            setFormData({ content: "", rate: null, productId: "", userId: "" });

        } catch (e) {
            console.error(e)
        }
    }

    const handleAddToWishlist = async (productId) => {
        try {
            const addNewProduct = await wishlistService.addItem(productId);
            dispatch(addProductTowWishlist(addNewProduct));
        } catch (e) {
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

    useEffect(() => {
        fetchOneProduct(params.id);
    }, []);

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    return (
        <Box component="section">
            {loading ? <Loader /> :
                <Container spacing={2} className={styles.pageDetailContainer}>
                    <Grid container spacing={4} mt={4}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            {product.images && product.images.length ? (
                                <ImageSlider className={styles.pageDetailSlider} images={product.images}/>
                            ) : (
                                <img className={styles.pageDetailSlider} src="/product-detail_0.jpg" alt={product.title}/>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Grid className={styles.leftBreadcrumbContainer} item xs={12} sm={12} md={10} lg={4} pt="10px"
                                  pb="10px">
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
                            <Typography className={styles.pageDetailTitle} variant="h4">{product.title}</Typography>
                            <Box className={styles.pageDetailRating}>
                                <Rating
                                    name="simple-controlled"
                                    value={product.productComments.rate}
                                    onChange={handleRatingChange}
                                />
                                <Typography className={styles.pageDetailSubTitle}
                                            variant="h6">{"8k+ reviews"}</Typography>
                            </Box>
                            {/*<Typography className={styles.pageDetailPrice} variant="h5">${product.price}</Typography>*/}
                            <Box className={styles.priceGroup}>
                                {product.salePrice &&
                                    <Typography variant="body1" className={styles.salePrice}>${product.salePrice}</Typography>
                                }
                                <Typography variant="body1" className={`${product.salePrice ? styles.price : ''}`}>${product.price}</Typography>
                            </Box>
                            <Typography className={styles.pageDetailDescription} variant="body1">
                                <span dangerouslySetInnerHTML={{__html: safeDescription}}/>
                            </Typography>
                            <Box className={styles.pageDetailContainerSIZES}>
                                <Typography className={styles.pageDetailText} variant="h5">SIZES</Typography>
                                <Box className={styles.pageDetailSIZES}>
                                    {product?.sizes?.map((size) => (
                                        <Button
                                            className={`${styles.pageDetailBtnSizes} ${selectedSize === size ? styles.activeSize : ''}`}
                                            key={size.id}
                                            onClick={() => handleSizeChange(size)}
                                        >
                                            {size.name}
                                        </Button>
                                    ))}
                                </Box>
                                <Button onClick={() => setIsOpen(true)} className={styles.pageDetailBtnSizeGuide}
                                        variant="text">SIZE GUIDE</Button>
                                <SizeGuideModal open={isOpen} onClose={() => setIsOpen(false)}/>
                            </Box>
                            <FormControl className={styles.pageDetailCOLOR}>
                                <Typography className={styles.pageDetailTextColor} variant="h5">COLOR</Typography>
                                <RadioGroup row value={selectedColor} onChange={handleColorChange}>
                                    {product?.colors?.map((color) => (
                                        <FormControlLabel
                                            key={color.id}
                                            value={color.name}
                                            control={<Radio className={styles.pageDetailRadio} sx={{
                                                color: color.name,
                                                '&.Mui-checked': {color: color.name}
                                            }}/>}
                                            label=""
                                            className={styles.pageDetailColorLabel}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <ProductMeta setQuantity={setQuantity} quantity={quantity} product={product}
                                         handleAddToWishlist={handleAddToWishlist} handleAddToBasket={handleAddToBasket}/>
                        </Grid>
                    </Grid>
                    <SingleTabSection formData={formData} currentUser={currentUser} submitComment={submitComment} handleChange={handleChange} handleRatingChange={handleRatingChange} product={product}/>
                    <RelatedProductsSlider/>
                </Container>
            }
        </Box>
    );
};

export default DetailPageShopCategory;
import {ADD_PRODUCTS, DELETE_PRODUCTS, SET_PRODUCTS, UPDATE_PRODUCTS} from "@/store/basket/types";

export const setBasketProducts = (basket) => ({
    type: SET_PRODUCTS,
    payload: basket,
});

export const addProductToBasket = (product) => ({
    type: ADD_PRODUCTS,
    payload: product,
});

export const updateProductInBasket = (product) => ({
    type: UPDATE_PRODUCTS,
    payload: product,
});

export const deleteProductFromBasket = (productId) => ({
    type: DELETE_PRODUCTS,
    payload: productId,
});
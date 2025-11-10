import {ADD_WISHLISTS, DELETE_WISHLISTS, SET_WISHLISTS} from "@/store/wishlist/types";

export const setWishlistProducts = (wishlist) => ({
    type: SET_WISHLISTS,
    payload: wishlist,
});

export const addProductTowWishlist = (product) => ({
    type: ADD_WISHLISTS,
    payload: product,
});

export const deleteProductFromWishlist = (productId) => ({
    type: DELETE_WISHLISTS,
    payload: productId,
});
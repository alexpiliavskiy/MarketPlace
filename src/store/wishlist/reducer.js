import {ADD_WISHLISTS, DELETE_WISHLISTS, SET_WISHLISTS} from "@/store/wishlist/types";

const initialState = {
    products: []
};

export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WISHLISTS:
            return {...state, products: action.payload};
        case ADD_WISHLISTS:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case DELETE_WISHLISTS:
            return {
                ...state,
                products: state.products.filter(product => product.productId !== action.payload)
            };
        default:
            return state;
    }
}
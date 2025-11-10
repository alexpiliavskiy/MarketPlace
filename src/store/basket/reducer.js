import {ADD_PRODUCTS, DELETE_PRODUCTS, SET_PRODUCTS, UPDATE_PRODUCTS} from "@/store/basket/types";

const initialState = {
    products: []
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload};
        case ADD_PRODUCTS:
            const product = state.products.find(product => product.productId === action.payload.productId);
            const productIndex = state.products.findIndex(product => product.productId === action.payload.productId);
            if (!product) {
                return {
                    ...state,
                    products: [...state.products, action.payload]
                }
            } else {
                return {
                    ...state,
                    products: [
                        ...state.products.slice(0, productIndex),
                        {
                            ...action.payload
                        },
                        ...state.products.slice(productIndex + 1),
                    ]
                }
            }
        case UPDATE_PRODUCTS:
            const productIndexForUpdate = state.products.findIndex(product => product.productId === action.payload.productId);
            return {
                ...state,
                products: [
                    ...state.products.slice(0, productIndexForUpdate),
                    {
                        ...action.payload
                    },
                    ...state.products.slice(productIndexForUpdate + 1),
                ]
            }
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
};

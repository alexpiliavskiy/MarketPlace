import { ADD_CURRENT_USER } from "@/store/actions";

const initialState  = {
    addCurrentUser: null
};


export const addCurrentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_USER:
            return  {...state, addCurrentUser: action.payload };
        default:
            return state;
    }
};


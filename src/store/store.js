import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {addCurrentUserReducer} from "@/store/addCurrentUserReducer";
import {basketReducer} from "@/store/basket/reducer";
import {wishlistReducer} from "@/store/wishlist/reducer";

const rootReducer = combineReducers({
    addUser: addCurrentUserReducer,
    basket: basketReducer,
    wishlist: wishlistReducer
})
export const store = createStore(rootReducer, composeWithDevTools());
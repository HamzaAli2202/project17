import {
    createStore,
    combineReducers
} from "redux";
import {
    productReducer
} from "./Reducer/productReducer";
import {
    prodDetailsReducer
} from "./Reducer/prodDetailsReducer"
import {
    pcartReducer
} from "./Reducer/pcartReducer";


export const configStore = () => {
    const store = createStore(
        combineReducers({
            productReducer,
            prodDetailsReducer,
            pcartReducer,





        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
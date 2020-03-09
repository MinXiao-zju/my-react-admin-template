import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import "@fortawesome/fontawesome-free/css/all.min.css";


let finalCreateStore;

// redux-devtools is not required
if (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__) {
        finalCreateStore = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())(createStore);
} else {
    finalCreateStore = applyMiddleware(thunk)(createStore);
}

const store = finalCreateStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(())
export default store;
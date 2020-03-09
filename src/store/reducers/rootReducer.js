import { combineReducers } from "redux";
import productReducer from "./productReducer";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";

const intialState = {
    appName: 'my project',
    page: {
        area: 'home',
        subArea: ''
    }
};

const rootTypes = {
    UPDATE_CURRENT_PATH: 'UPDATE_CURRENT_PATH'
};

// 设置 breadcrumb （面包屑） 导航效果
export const rootActions = {
    updateCurrentPath: (area, subArea) => ({
        type: rootTypes.UPDATE_CURRENT_PATH,
        area: area,
        subArea: subArea
    })
};

const appReducer = (state = intialState, action) => {
    switch (action.type) {
        case rootTypes.UPDATE_CURRENT_PATH:
            return {
                ...state, page: { area: action.area, subArea: action.subArea }
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    root: appReducer,
    account: accountReducer,
    products: productReducer,
    users: userReducer
});

export default rootReducer;
import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import addItem from "./additem";
//Api
import userReducer from "../userSlice"
import authReducer from "../authSlice";
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ ThemeReducer, addItem });

const store = configureStore({
    reducer:{
        auth: authReducer,
        users: userReducer,
    }
})



export default rootReducer;

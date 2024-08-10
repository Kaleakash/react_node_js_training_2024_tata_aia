import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducer/productSlice'
import logger from "redux-logger";

export const store = configureStore({
    reducer:{
        products:productReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
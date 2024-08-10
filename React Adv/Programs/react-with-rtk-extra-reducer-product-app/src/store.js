import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducer/productSlice'
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = configureStore({
    reducer:{
        products:productReducer
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware.apply(composeWithDevTools())
})
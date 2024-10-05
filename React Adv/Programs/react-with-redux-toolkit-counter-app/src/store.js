import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice';     // like reducer 


export const store = configureStore({
    reducer:{
        counter:counterSlice,
    }
})
import {createSlice} from "@reduxjs/toolkit";
const productSlice = createSlice({
    name:"products",
    initialState:{
        productList:[],
        loading:false,
        error:null
    },
    reducers:{
        fetchProductsStart(state,action) {

        },
        fetchProductSuccess(state,action){

        },
        fetchProductFailure(state,action){

        },
        addProductsStart(state,action) {

        },
        addProductSuccess(state,action){

        },
        addProductFailure(state,action){

        }
    }
})
export const {
    fetchProductsStart,
    fetchProductSuccess,
    fetchProductFailure,
    addProductsStart,
    addProductSuccess,
    addProductFailure
}=productSlice.actions;

export default productSlice.reducer;

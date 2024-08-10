import {createSlice} from "@reduxjs/toolkit"

const initialStateInfo={
    productList:[],
    loading:false,
    error:null,
    requestId:""
}

const productSlice = createSlice({
name:"products",
initialState:initialStateInfo,
extraReducers:(builder)=> {
    builder.
    addCase("products/fetchProducts/fulfilled",(state,action)=> {
        state.loading=false;
        state.productList=action.payload
    }).addCase("products/fetchProducts/pending",(state,action)=> {
        state.loading=true;
    }).addCase("products/fetchProducts/rejected",(state,action)=> {
        state.error=action.error.message
    }).
    addCase("store/fulfilled",(state,action)=> {
        state.loading=false;
        state.productList.concat(action.payload)
        state.requestId=action.requestId
    }).addCase("store/pending",(state,action)=> {
        state.loading=true;
    }).addCase("store/rejected",(state,action)=> {
        state.error=action.error.message
    })
}
})

export default productSlice.reducer;
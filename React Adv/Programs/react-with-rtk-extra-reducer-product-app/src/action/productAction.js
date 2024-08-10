import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


let url = "http://localhost:3000/products"

export const fetchProducts= createAsyncThunk("products/fetchProducts",async()=> {
    const response = await axios.get(url);
    return response.data
})
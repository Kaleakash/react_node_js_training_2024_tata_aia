import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../action/productAction";

function AddProduct() {
let dispatch = useDispatch();
let [product,setProduct]=useState({})

let handleSubmit = (event)=> {
    event.preventDefault();
    console.log(product)
    setProduct({"pname":"","price":""})
    dispatch(addProduct(product));
}
    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>PName</label>
                <input type="text" name="pname" value={product.pname}
onChange={(event)=>setProduct(previousProduct=>{return {...previousProduct,"pname":event.target.value}})}/><br/>
                <label>Price</label>
                <input type="number" name="price" value={product.price}
onChange={(event)=>setProduct(previousProduct=>{return {...previousProduct,"price":event.target.value}})}/><br/>
            <input type="submit" value="Add Product"/>
            <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default AddProduct;
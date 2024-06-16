import axios from "axios";

import { useEffect, useState } from "react";

function ProductOperation() {
let [products,setProducts]=useState([{}]);  // to store product array 

useEffect(()=> {

let loadProductInfo= ()=>{
axios.get("http://localhost:3000/products").then(result=>setProducts(result.data)).catch(error=>console.log("catch block"+error))
}

loadProductInfo();

},[])

    return(
        <div>
            <h3>Product Management System using Axios</h3>

            <table>
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index)=>
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.pname}</td>
                        <td>{product.price}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperation;



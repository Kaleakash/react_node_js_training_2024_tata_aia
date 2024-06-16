import axios from "axios";

import { useEffect } from "react";

function ProductOperation() {

useEffect(()=> {

let loadProductInfo= ()=>{
axios.get("http://localhost:3000/products").then(result=>console.log(result.data)).catch(error=>console.log(error))
}

loadProductInfo();

},[])

    return(
        <div>
            <h3>Product Management System using Axios</h3>
        </div>
    )
}

export default ProductOperation;
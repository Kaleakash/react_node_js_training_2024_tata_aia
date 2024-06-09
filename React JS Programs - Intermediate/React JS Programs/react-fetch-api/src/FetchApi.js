import { useState } from "react";

function FetchApi() {
//let [products,setProducts]=useState(null); // array object state variable
let [products,setProducts]=useState([{}]); // array object state variable 

let loadData= ()=> {
    fetch("https://fakestoreapi.com/products").then(response=>response.json()).
    then(result=>{
        console.log(result);
        setProducts(result)
    }).catch(error=>console.log(error));
    //console.log(products.length)
}
    return(
        <>
        <h2>Rest API using Fetch function</h2>
        <input type="button" value="Load Data" onClick={loadData}/><br/>
        {products.map((product,index)=>
            
            <div key={index}>
                <img src={product.image} width="200px" height="200px"/>
                <span>{product.id}){product.title}</span> 
            </div>)
            
            }
       
        </>
    )
}

export default FetchApi;
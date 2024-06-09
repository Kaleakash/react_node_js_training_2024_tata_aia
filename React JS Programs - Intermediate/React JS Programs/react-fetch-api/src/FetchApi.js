import { useEffect, useState } from "react";

function FetchApi() {
//let [products,setProducts]=useState(null); // array object state variable
let [products,setProducts]=useState([{}]); // array object state variable 
let [loading,isLoading]=useState(true);

// let loadData= ()=> {
//     fetch("https://fakestoreapi.com/products").then(response=>response.json()).
//     then(result=>{
//         console.log(result);
//         setProducts(result)
//     }).catch(error=>console.log(error));
//     //console.log(products.length)
// }

useEffect(()=> {
    
    setTimeout(()=>{

        fetch("https://fakestoreapi.com/products").then(response=>response.json()).
        then(result=>{
            console.log(result);
            setProducts(result)
            isLoading(false);
        }).catch(error=>console.log(error));
    
    },5000)

    // fetch("https://fakestoreapi.com/products").then(response=>response.json()).
    // then(result=>{
    //     console.log(result);
    //     setProducts(result)
    //     isLoading(false);
    // }).catch(error=>console.log(error));

},[])



    if(loading){
        return <h2>Data Loading......</h2>
    }

    return(
        <>
        <h2>Rest API using Fetch function</h2>
        {/* <input type="button" value="Load Data" onClick={loadData}/><br/> */}
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
import axios from "axios";
import { useEffect, useState } from "react";

function ImageComponent() {
let [product,setProducts]=useState([])

useEffect(()=> {
    axios.get("https://fakestoreapi.com/products").then(result=> {
        setProducts(result.data)
    }).catch()
    
},[])
console.log(product.length)
    return(
        <div>
            <h2>Image Gallery</h2>
            {
                product.map(p=>

                    <img src={p.image} width={300} height={400}/>
                )
            }
        </div>
    )
}

export default ImageComponent;
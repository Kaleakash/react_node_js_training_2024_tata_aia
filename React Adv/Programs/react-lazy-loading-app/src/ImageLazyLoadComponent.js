import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'
function ImageLazyLoadComponent() {
let [product,setProducts]=useState([])
let [loading,setLoading]=useState(true)

useEffect(()=> {
    axios.get("https://fakestoreapi.com/products").then(result=> {
        setProducts(result.data)
        setLoading(false)
    }).catch(error=> {
        console.log("error generated "+error)
        setLoading(true);
    })
},[])

    if(loading){
        return <h2>Image Loading......</h2>
    }
    return(
        <div>
            {
        product.map(p=>

        <LazyLoadImage 
        alt={p.title}
        width={500}
        height={600}
        src={p.image}
        effect="blur"
        
        >
        </LazyLoadImage>

        )
        
        
        }
        </div>
    )
}

export default ImageLazyLoadComponent;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../action/productAction";

function ProductView() {
let products = useSelector(gs=>gs.products.productList)
let requestId=useSelector(gs=>gs.products.requestId)
let loading=useSelector(gs=>gs.products.loading)
let dispatch = useDispatch();

useEffect(()=> {
    dispatch(fetchProducts())
},[requestId])

console.log(products)

    if(loading){
        return <h2>Product data loading....</h2>
    }
    return(
        <div>
            {products.map((p,index)=>
            <div key={index}>
                <p>Id {p.id} Name {p.pname} Price {p.price}</p>    
            </div>)}
        </div>
    )
}


export default ProductView;
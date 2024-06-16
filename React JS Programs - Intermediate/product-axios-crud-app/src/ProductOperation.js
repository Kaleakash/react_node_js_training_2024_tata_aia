import axios from "axios";
import { useEffect, useState } from "react";

function ProductOperation() {

let [products,setProducts]=useState([{}]);  // to store product array 
let [msg,setMessage]=useState("");
let [buttonValue,setButtonValue]=useState("Add Product");
let [flag,setFlag]=useState(false);
let [productForm,setProductForm]=useState({});  // old one product details receive from form 


useEffect(()=> {

let loadProductInfo= ()=>{
axios.get("http://localhost:3000/products").then(result=>setProducts(result.data)).catch(error=>console.log("catch block"+error))
}

loadProductInfo();

},[msg])


let handleSubmit=(event)=> {
    event.preventDefault();
    console.log(productForm)
    // post method takes two parameter 
    //1st parameter url and 2nd parameter json data. 
    let result = products.find(p=>p.id==productForm.id);
    if(result==undefined){
    axios.post("http://localhost:3000/products",productForm).
    then(result=>{console.log(result); setMessage(result.data)}).catch(error=>console.log(error))
    }else {
        alert("product id must be unique")
    }
}

let handleDelete=(id)=> {
    //console.log(id)
    // path param technique passing id through url
    axios.delete("http://localhost:3000/products/"+id).then(result=>{
        console.log(result)
        setMessage(result.data)
    }).catch(error=>console.log(error))
}

let handleUpdate=(product)=> {
    console.log(product)
}
    return(
        <div className="container">
        <div className="row">   
                <div className="col-3 offset-4" >
                  <h3>{buttonValue}</h3>
                </div>
           </div>

           <form className="form-group" onSubmit={handleSubmit}>
           <div className="row">
                <div className="col-2 offset-3" >
                    <label>PId</label>
                </div>
                <div className="col-2">
            <input type="number" className="form-control" name="productForm.id"
            onChange={(event)=>setProductForm(previousProduct=> { return {...previousProduct,id:event.target.value} } )}
            required value={productForm.pid} readOnly={flag}/>
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <label>PName</label>
                </div>
                <div className="col-2">
                   <input type="text" className="form-control" name="productForm.pname"
            onChange={(event)=>setProductForm(previousProduct=>{return {...previousProduct,pname:event.target.value}})}
            required value={productForm.pname}/>
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <label>Price</label>
                </div>
                <div className="col-2">
                   <input type="number" className="form-control" name="productForm.price"
            onChange={(event)=>setProductForm(previousProduct=>{return {...previousProduct,price:event.target.value}})}
            required value={productForm.price}
            />
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <input type="submit" value={buttonValue} className="btn btn-outline-success"/>
                </div>
                <div className="col-2">
                   <input type="reset" value="reset" className="btn btn-outline-info"/>
                </div>
           </div>
            </form>
            <hr/>

            <h3>Product Management System using Axios</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,i)=>
                    <tr key={i}>
                        <td>{product.id}</td>
                        <td>{product.pname}</td>
                        <td>{product.price}</td>

                        <td>
                            <a onClick={()=>handleDelete(product.id)}>
                                <img src="delete.png" width="50px" height="50px"/>
                            </a>
                        </td>

                        <td>
                            <a onClick={()=>handleUpdate(product)}>
                                <img src="update.png" width="50px" height="50px"/>
                            </a>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperation;



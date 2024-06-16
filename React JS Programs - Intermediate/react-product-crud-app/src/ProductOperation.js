import { useState } from "react";

function ProductOperation() {
let [productForm,setProductForm]=useState({});
let [products,setProducts]=useState([{}])


let handleSubmit=(event)=> {
    
    event.preventDefault();
    console.log(productForm)
                    //products.push(productForm); // not re-render
    //console.log(products.length);
    //console.log(products)
    // 1st way 
    setProducts(data=>{return [...data,productForm]})
    //let tempproducts = products;        // call by reference value as well as reference copied in tempproduct 
    
    // 2nd way 
    // let tempproducts = [...products]        // call by value we are copied only value not reference. 
    // tempproducts.push(productForm);
    // setProducts(tempproducts);  // 3 product , 4 product

}
    return(
        <div className="container">

        <div className="row">   
                <div className="col-2 offset-4" >
                  <h3>Add Product</h3>
                </div>
           </div>

           <form className="form-group" onSubmit={handleSubmit}>
           <div className="row">
                <div className="col-2 offset-3" >
                    <label>PId</label>
                </div>
                <div className="col-2">
            <input type="number" className="form-control" name="productForm.pid"
            onChange={(event)=>setProductForm(previousProduct=> { return {...previousProduct,pid:event.target.value} } )}
            />
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <label>PName</label>
                </div>
                <div className="col-2">
                   <input type="text" className="form-control" name="productForm.pname"
            onChange={(event)=>setProductForm(previousProduct=>{return {...previousProduct,pname:event.target.value}})}/>
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <label>Price</label>
                </div>
                <div className="col-2">
                   <input type="number" className="form-control" name="productForm.price"
            onChange={(event)=>setProductForm(previousProduct=>{return {...previousProduct,price:event.target.value}})}/>
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <label>Image</label>
                </div>
                <div className="col-2">
                   <input type="url" className="form-control" name="productForm.url"
            onChange={(event)=>setProductForm(previousProduct=>{return {...previousProduct,url:event.target.value}})}/>
                </div>
           </div>

           <div className="row">
                <div className="col-2 offset-3">
                    <input type="submit" value="Store Product" className="btn btn-outline-success"/>
                </div>
                <div className="col-2">
                   <input type="reset" value="reset" className="btn btn-outline-info"/>
                </div>
           </div>
            </form>
            <hr/>
            
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>ImageURL</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    products.map(
                        
                    (product,index)=>
                    <tr key={index}>
                        <td>{product.pid}</td>
                        <td>{product.pname}</td>
                        <td>{product.price}</td>
                        <td>< img src={product.url} width="100px" height="100px"/></td>
                    </tr>
                    
                    )
                    
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ProductOperation;
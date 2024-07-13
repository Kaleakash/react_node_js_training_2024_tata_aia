import { useState } from "react";

function ProductOperation() {

    let [flag,setFlag]=useState(false);

let [productForm,setProductForm]=useState({});  // old one product details receive from form 

let [products,setProducts]=useState([{
    "pid":100,
    "pname":"TV",
    "price":56000,
    "url":"data:image/jpeg;base64,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"
}])       // store more than one products.
let [buttonValue,setButtonValue]=useState("Add Product");

let handleSubmit=(event)=> {
    
    event.preventDefault();
    console.log(productForm)

    //products.push(productForm); // not re-render
    //console.log(products.length);
    //console.log(products)
    // 1st way 
    //console.log(productForm.pid)

    if(buttonValue=="Add Product"){
    let result = products.find(p=>p.pid==productForm.pid);  // if record present it return that record else return undefined 
    if(result==undefined){
    setProducts(data=>{return [...data,productForm]})
    alert("product details stored..")
    }else {
     alert("product id must be unique")   
    }
}else {
    // logic to update 
    let filterProduct = products.filter(p=>p.pid!=productForm.pid);// remove pid record from array and generate new array
    setProducts(filterProduct);
    setProducts(data=>{return [...data,productForm]})
    alert("product updated");
    setFlag(false);
    setButtonValue("Add Product")
}
setProductForm({pid:"",pname:"",price:"",url:""})
    //let tempproducts = products;        // call by reference value as well as reference copied in tempproduct 
    
    // 2nd way 
    // let tempproducts = [...products]        // call by value we are copied only value not reference. 
    // tempproducts.push(productForm);
    // setProducts(tempproducts);  // 3 product , 4 product
    
}
let handleDelete = (event,pid)=> {
    console.log(pid)            // pid =100
    let filterProduct = products.filter(p=>p.pid!=pid);// remove pid record from array and generate new array
    setProducts(filterProduct);
}
let handleUpdate= (event,product)=> {
    console.log(product)
    setFlag(true);
    setProductForm(product);    // product hold pid,pname,price, url productForm set method 
    setButtonValue("Update Product");
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
            <input type="number" className="form-control" name="productForm.pid"
            onChange={(event)=>setProductForm(previousProduct=> { return {...previousProduct,pid:event.target.value} } )}
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
                    <label>Image</label>
                </div>
                <div className="col-2">
                   <input type="url" className="form-control" name="productForm.url"
            onChange={(event)=>setProductForm(previousProduct=>{return {...previousProduct,url:event.target.value}})}
            required value={productForm.url}
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
            
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>ImageURL</th>
                        <th>Delete</th>
                        <th>Update</th>
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
                        <td>
    <a onClick={(event)=>handleDelete(event,product.pid)}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAbFBMVEX////8AAX8AAD/4eL9i4z8ERH8LC3+hof+p6j+kJD+vLz+o6T/4+P9gYL9QkP//Pz/9vb8Jyj+xsb9UlP/7/D9bW39Zmb8Nzf+np/9e3z+6Oj+wcL8Skv+y8z9lZb+srP+1NT9Xl/8Ghr9dHS1jGUzAAAEIElEQVR4nO3ca3OiUAwGYAyWKqWCN7wr6v//j8vF4s4uJJDE4Oye96sd+oy2nJCTo+fxckph1COQnpi/iJkt9PLlQtha+qK+vkIYGQKnvX258GwI/OYAvx3QAR3QAR3QAX+yA0Z2hsDF9qt3tgtDoIuLi8s/n3gfTseGmYb7uA/vcOSsZbIcD52JSQr9n3ulyX9lmnTzRYE9ryIGnZ7tk+UgvJK47PIecroGasIp7VsN8/k+gLAigV8D+nLhF+WL18MC19S9Zj/cv0gJXFKfcTQbFjij7jQO6IAO6IAOaF9L/x4auJwHA2a+pIBx5A+aqM+zk4uLi8t/nh18GAU+WcCx3QrMmwjZmtU1cGEBL3bAkAUM7YC8XbKTHdBnAX07YMfW6h9ZWQEBeEVgbNUpBGD5DIE3HtAbWQE3TODcCnhkAq0ekeHKBHZothYLqeT16oe44xbkmCrAfJ2O2gn5K+n6RhLZo4/UdAzMyzX03PbPBB9lz/5C/S0zawWynIHbY40/N79H8LOncPkgLsQFTojrpo+fWx2bgfXG1pW40IEJJOqt56bLvRlYz0KdiQtlTOCBuG5dxX02A+uNN/yjAGYx43mZEXDEBfrEPU4LOH934GzPBeI3MDXgld6Dbc4eX4zVgF1nFf7KCl+M1YB3LjDBF2M14De37Zvgm9tqQPYxiXj35kBvbAPkn9XB11AlIMDkzYEjXmemCF4QagFv/ANjE3StUwNmbGCIlsJaQHat4HmnmwUw4C7FeUFoAuT2FTyqnHkD4CqwAM74wHhjAeQ2PoqYACXnTNCKVQvI28WpglasWkDJoVS0INQC8msFon2kBZQcJUILQi1gJgCi5cw7ANH2kQ5QdrQc3Q3TAvJrBaJ9pAS8cZ+Ki6DbdUrAQAJEv65ACTiTANHBfiVgKhknS7CKVQnIbnyUQKxiVQKOBT4vwcoZJaDoCyxibANBCUge0ECBWPtICcjdxcF+tSqQ3/gogh1wUgECe5upClbO6AAFnRni0krAIBMBsekjHSA52T008MjdxalyQBZjHSB5ygoP1t/SAV5lo+cZ0p3RAa5FPvT0xlsA9827/YrAuwyIbdfpADuch8WClTM6QEnjowiyn6gDlBUzaPtIByirFQyAmRCIFIQ6QNlKh9ZbOkDpGSakffQeQKSc0QBy52ufWbwYyJ2vrYO0j1SAgl2cKsi0twpwKQXGLwYKi5k8yIRqvUo1bwY8ge33KtEuDgmsL968YD/fnfb+hKzxUaa95q+n1k7NPbD6iTJq3/IT1wrofiLcy7ts65dbPB6IsAEmYeOjCFZSwyyM/Any/mwuvh+iLTz5N9ahA2bVmS7J65kYiM9vCaMBfOnhNclIyk+IaW8hcCP/iuWXnq6TNj6KvPR0HX989ZmXnq6DNQn8BWi5X5Zg872LAAAAAElFTkSuQmCC" width="50px" height="50px"/>
    </a>
                        </td>
                        <td>
    <a onClick={(event)=>handleUpdate(event,product)}>
        <img src="data:image/png;base64,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" width="50px" height="50px"/>
    </a>
                        </td>
                    </tr>
                    
                    )
                    
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ProductOperation;
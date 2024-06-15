import { useState } from "react";

function UserForm() {
let [formData,setFormData]=useState({})

let [error,setError]=useState("");

let handleSubmit=(event)=> {
    event.preventDefault();
    console.log(formData);
}
    return(
        <div>
            <h2>Login Page with forData Property</h2>
            <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text" name="formData.username" 
    onChange={(event)=>setFormData(obj=>{return{...obj,username:event.target.value}})}/><br/>
     <label>EmailId</label>
    <input type="email" name="formData.emailid" 
    onChange={(event)=>setFormData(previousData=>{return{...previousData,emailid:event.target.value}})}/><br/>
    <label>Password</label>
    <input type="password" name="formData.username" 
    onChange={(event)=>setFormData(previousData=>{return{...previousData,password:event.target.value}})}/>
    
    <br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default UserForm;
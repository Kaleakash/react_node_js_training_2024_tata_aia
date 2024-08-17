import axios from "axios";
import { useState } from "react";
import useCsrfToken from "./useCsrfToken";

function LoginWithToken() {
let [user,setUser]=useState({})
let csrfTokenValue = useCsrfToken();        // custom hook provide us token 
console.log(csrfTokenValue)
let handleSubmit = async (event)=> {
    event.preventDefault();
    console.log(user);
    try{
    let response = await axios.post("http://localhost:3001/api/submit-form",user,{
        headers:{
            'CSRF-Token':csrfTokenValue             // appending the token with header property 
           //"key":"value"
        },
        withCredentials:true,                   // ensure send cookies with request 
    })
    console.log(response.data.message)
    alert(response.data.message)    
    }catch(error){
        console.log(error)
    }
    setUser({"email":"","password":""})
}

return(
    <div>
        <h2>Login Page without Token</h2>
        <form onSubmit={handleSubmit}>
            <label>EmailId</label>
            <input type="email" name="email" onChange={(event)=>setUser(user=>{return {...user,"email":event.target.value}})}
            value={user.email}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event)=>setUser(user=>{return {...user,"password":event.target.value}})}
            value={user.password}/><br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
        </form>
    </div>
)

}


export default LoginWithToken;
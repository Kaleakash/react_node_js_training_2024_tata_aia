import axios from "axios";
import { useState } from "react";

function LoginWithoutToken() {
let [user,setUser]=useState({})

let handleSubmit = async (event)=> {
    event.preventDefault();
    console.log(user);
    try{
    let response = await axios.post("http://localhost:3001/api/submit-form",user)
    alert(response)
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


export default LoginWithoutToken;
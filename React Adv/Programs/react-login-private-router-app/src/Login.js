import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login(props) {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [error,setError]=useState("");
let navigate = useNavigate();       // which help to move to dashboard. 
let {login} = useAuth();
let handleSubmit=(event)=> {
    event.preventDefault();
    if(emailid.length==0 || password.length==0){
        setError("Emailid or password is missing")
        return;
    }
    //console.log(emailid+" "+password)
    let result = login(emailid,password);
    console.log(result);
    if(result){
        navigate("/dashboard"); 
    }else {
        setError("Emailid or password is wrong  ");
    }
    setError("");
}
return(
    <div>
        <span style={{"color":"red"}}>{error}</span>
        <h4>Login Page</h4>
        <form onSubmit={handleSubmit}>
            <label>EmailId</label>
            <input type="email" name="emailid" onChange={(event)=>setEmailId(event.target.value)}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/><br/>
            <input type="submit" value="SignIn"/>
            <input type="reset" value="reset"/>
        </form>
    </div>
)
}

export default Login;
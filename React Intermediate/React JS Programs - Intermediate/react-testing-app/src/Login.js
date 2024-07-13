import { useState } from "react";

function Login() {
let [emailid,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [error,setError]=useState("");
let [msg,setMsg]=useState("")
let handleSubmit=(event)=> {
    event.preventDefault();
    if(emailid=="admin@gmail.com" && password=="admin@123"){
            setMsg("success")
    }else {
            setMsg("failure")
    }
}
    return(
        <div>
            <span data-testid="result">{msg}</span>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
                <input type="email" name="emailid" onChange={(event)=>setEmailId(event.target.value)}
                data-testid="emailid"/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}
                data-testid="password"
                /><br/>
                <input type="submit" value="submit" data-testid="submit"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )

}

export default Login;
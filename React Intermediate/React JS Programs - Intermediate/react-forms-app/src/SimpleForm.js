import { useState } from "react";

function SimpleForm() {
    let[username,setUserName]=useState("");
    let[password,setPassword]=useState("");
    let[emailid,setEmailid]=useState("");
    let [error,setError]=useState("");

let handleField=(event)=> {
    let name = event.target.name;
    let value = event.target.value;
   // console.log(name+" "+value)
   if(name=="username"){
    setUserName(value)
   }
   if(name=="emailid"){
    setEmailid(value)
   }
   if(name=="password"){
    setPassword(value)
   }
}
let handleSubmit1=(event)=> {
    event.preventDefault();
    //console.log(username+" "+password+" "+emailid)
    let user = {username,emailid,password}      // object literal 
    console.log(user);
}
let handleSubmit2=(event)=> {
    event.preventDefault();
    if(username.length==0 || emailid.length==0 || password.length==0){
        setError("All fields required")
    }else {
        //console.log(username+" "+password+" "+emailid)
        let user = {username,emailid,password}      // object literal 
        console.log(user);
        setError("")
    }
    
}
return(
    <div>
        <h3>Login Page with HTML5 Validation</h3>
        <form onSubmit={handleSubmit1}>
        <label>UserName</label>
        <input type='text' name='username' onChange={handleField} required/><br/>
        <label>EmailId</label>
        <input type='email' name='emailid' onChange={handleField} required/><br/>
        <label>Password</label>
        <input type='password' name='password' onChange={handleField} required/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
        </form>
        <hr/>
        <span style={{color:"red"}}>{error}</span>
        <h3>Login Page</h3>
        <form onSubmit={handleSubmit2}>
        <label>UserName</label>
        <input type='text' name='username' onChange={(event)=>setUserName(event.target.value)}/><br/>
        <label>EmailId</label>
        <input type='email' name='emailid' onChange={(event)=>setEmailid(event.target.value)}/><br/>
        <label>Password</label>
        <input type='password' name='password' onChange={(event)=>setPassword(event.target.value)}/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
        </form>
    </div>
)

}

export default SimpleForm;
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
let emailref = useRef("")
let passref = useRef("");

let countref = useRef(100);

let navigate = useNavigate();

let couterHandle = ()=> {
    console.log(countref)
    console.log(countref.current+10)
    //countref.current=200;

}
let handleSubmit=(event)=> {
    event.preventDefault();
    //console.log(emailref.current); 
    //console.log(emailref.current.value)
    //console.log(passref.current.value);
    let emailid = emailref.current.value
    let password = passref.current.value
    if(emailid=="akash@gmail.com" && password=="123"){
            alert("success")
            navigate("/home");
    }else {
            alert("failure")
            passref.current.value=""
            emailref.current.value=""
    }
}
    return(
        <div>
            <h4>Login page</h4>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
            <input type="email" name="emailid" ref={emailref}/><br/>
                <label>Pasword</label>
            <input type="password" name="password" ref={passref}/><br/>
                <input type="submit" value="SignIn!"/>
                <input type="reset" value="reset"/>
            </form>
            <input type="button" value="counter" onClick={couterHandle}/>
        </div>
    )
}

export default Login;
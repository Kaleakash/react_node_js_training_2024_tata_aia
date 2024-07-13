import { useContext, useState } from "react";
import { UserContext } from "./Context";

function AddUser() {
let [user,setUser]=useState({});

let {dispatchUser}=useContext(UserContext);

let handleSubmit=(event)=> {
    event.preventDefault();
    //console.log(user);
    dispatchUser({type:"ADD",payload:user});
    setUser({name:"",age:""});
}
    return(
        <div>
            <h4>Add User</h4>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={(event)=>setUser(u=>{return {...u,"name":event.target.value}})}/><br/>
                <label>Age</label>
        <input type="text" name="name" value={user.age} onChange={(event)=>setUser(u=>{return {...u,"age":event.target.value}})}/><br/>
        <input type="submit" value="Add User"/>
        <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default AddUser;
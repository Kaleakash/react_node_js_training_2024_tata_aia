import { useState } from "react";

function UserUseState() {
let [users,setUsers]=useState([]);
let [currentUser,setCurrentUser]=useState({id:null,name:"",age:""})

let addUser=(event)=> {
    event.preventDefault();
    //console.log(currentUser)
    let tempUser = {id:Date.now(),name:currentUser.name,age:currentUser.age}
    setUsers(previousUser=>{return [...previousUser,tempUser]})
    setCurrentUser({id:null,name:"",age:""})
}
let deleteUser = (id)=> {
   let filterUser = users.filter(u=>u.id!=id);
   setUsers(filterUser);
}
    return(
        <div>
            <h3>User CRUD Operation using useState</h3>
            <form onSubmit={addUser}>
        <label>Name</label>
         <input type="text" name="name" value={currentUser.name} onChange={(event)=>setCurrentUser(user=>{return {...user,"name":event.target.value}})}/>
         <label>Age</label>
         <input type="number" name="age" value={currentUser.age} onChange={(event)=>setCurrentUser(user=>{return {...user,"age":event.target.value}})}/>
        <input type="submit" value="Add User"/>
        <input type="reset" value="reset"/>
            </form>
            <br/>
            {users.map((u,index)=>
                <div key={index}>Name is {u.name} age is {u.age}
                <input type="button" value="Delete User" onClick={()=>deleteUser(u.id)}/>
                </div>
            )}
        </div>
    )
}

export default UserUseState;
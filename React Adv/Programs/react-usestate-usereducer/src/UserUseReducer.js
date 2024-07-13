import { useReducer, useState } from "react";
const initialState ={
    users:[],
    name:"Akash Kale"
}
const reducer = (state,action)=> {
        console.log(action)
        if(action.type=="ADD_USER"){
            return {
                ...state,users:[...state.users,action.payload]
            }
        }
        if(action.type=="DELETE_USER"){
            let id = action.payload
            let filterUser = state.users.filter(u=>u.id!=id);
            return {
                ...state,users:filterUser
            }
        }
        return state;
}
function UserUseReducer() {
let [state,dispatch]=useReducer(reducer,initialState);  // 1st parameter reducer function and initial state. 
let [currentUser,setCurrentUser]=useState({id:null,name:"",age:""}) 
let addUser=(event)=> {
    event.preventDefault();
    let tempUser = {id:Date.now(),name:currentUser.name,age:currentUser.age}
    dispatch({type:"ADD_USER",payload:tempUser})
    setCurrentUser({id:null,name:"",age:""})
}
return(
    <div>
        {state.name}
        <h2>User Crud Operation using useReducer</h2>
        <form onSubmit={addUser}>
        <label>Name</label>
         <input type="text" name="name" value={currentUser.name} onChange={(event)=>setCurrentUser(user=>{return {...user,"name":event.target.value}})}/>
         <label>Age</label>
         <input type="number" name="age" value={currentUser.age} onChange={(event)=>setCurrentUser(user=>{return {...user,"age":event.target.value}})}/>
        <input type="submit" value="Add User"/>
        <input type="reset" value="reset"/>
        </form>
        <br/>
            {state.users.map((u,index)=>
                <div key={index}>Name is {u.name} age is {u.age}
                <input type="button" value="Delete User" onClick={()=>dispatch({type:"DELETE_USER",payload:u.id})}/>
                </div>
            )}
    </div>
)

}
export default UserUseReducer;
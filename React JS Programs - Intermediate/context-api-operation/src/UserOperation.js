import { act, useState } from "react";
import AddUser from "./AddUser";
import { UserContext } from "./Context";
import DisplayUser from "./DisplayUser";

function UserOperation() {

let [users,setUsers]=useState([]);

let dispatchUser=(action)=> {
    //console.log(action)
    if(action.type=="ADD"){
        setUsers(data=>{return [...data,action.payload]});
        alert("User Added...")
    }
}
    return(
        <UserContext.Provider value={{dispatchUser,users}}>
            <div>
                <h2>User Operation</h2>
                <AddUser></AddUser>
                <DisplayUser></DisplayUser>
            </div>
        </UserContext.Provider>
    )

}

export default UserOperation;
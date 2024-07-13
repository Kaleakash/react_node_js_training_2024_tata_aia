import { useState } from "react";
import AddUser from "./AddUser";
import { UserContext } from "./Context";
import DisplayUser from "./DisplayUser";

function UserOperation() {

let [users,setUsers]=useState([]);

let dispatchUser=(action)=> {
    console.log(action)
    if(action.type=="ADD"){
        setUsers(data=>{return [...data,action.payload]});
        //alert("User Added...")
    }else if(action.type=="DELETE"){
        let index = action.payload;
        let dummyUsers = [...users];        // copy all user in local variable. only values not references. 
        dummyUsers.splice(index,1);     // splice 1st parameter index and 2nd parameter number of records to delete 
        setUsers(dummyUsers);               // update in state variable as users
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
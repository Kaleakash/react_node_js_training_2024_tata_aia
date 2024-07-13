import { useState } from "react";
import usersInfo from './users';
import UserList from "./UserList";

function UserDetailsApp() {
let [users,setUsers]=useState(usersInfo)            // users hold array data. 

let updateUser=(data)=> {
    //console.log("in User Details App event fired")
    console.log(data);
    let updatedUsersInfo = users.map(user=>user.id==data.id?data:user)
    setUsers(updatedUsersInfo);
}
    return(
        <div>
            <UserList users={users} updateUser={updateUser}></UserList>
        </div>
    )
}

export default UserDetailsApp;
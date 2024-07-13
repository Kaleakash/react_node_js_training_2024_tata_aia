import { useEffect, useState } from "react";
import UserList from "./UserList";

function UserListContainer() {
let [users,setUsers]=useState([]);
let [isLoading,setIsLoading]=useState(true);

let deleteUser=(id)=> {
    console.log(id);
    let filterUser = users.filter(user=>user.id!=id);
    setUsers(filterUser);
}
useEffect(()=> {
    setTimeout(()=> {
        const loadUserInfo=()=>{
            fetch("https://dummyjson.com/users").
            then(res=>res.json()).
            then(result=>{
                
                console.log(result.users)
                setUsers(result.users)    
            }).
            catch(error=>console.log(error))
        }
        setIsLoading(false);
        loadUserInfo();
    },3000);
   
},[])

return(
    <div>
        <h3>User Details</h3>
        {
            isLoading?<h2>Data Loading.....</h2>:<UserList users={users} deleteUser={deleteUser}></UserList>
        }
    </div>
)
}

export default UserListContainer;
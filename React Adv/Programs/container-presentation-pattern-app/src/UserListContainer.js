import useFetch from "./useFetch";
import UserList from "./UserList";

function UserListContainer() {
let [users,isLoading,setUsers]=useFetch();

let deleteUser=(id)=> {
    console.log(id);
    let filterUser = users.filter(user=>user.id!=id);
    setUsers(filterUser);
}
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
import UserDetail from "./UserDetail";

function UserList({users,updateUser}) {


    return(
        <div>
            <h4>User List</h4>
            <ul>
            {
            users.map((u,index)=>
              <li> <UserDetail key={index} user={u} updateUser={updateUser}></UserDetail></li>
            )
            }
            </ul>
        </div>
    )

}

export default UserList;
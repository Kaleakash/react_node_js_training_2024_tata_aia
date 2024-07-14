import User from "./User";

function UserList({users,deleteUser}) {
return(
    <div>
        <h2>All User Information</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>PhNumber</th>
                    <th>BirthDate</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>
                <tr key={index}>
                     <User user={user} deleteUser={deleteUser}></User>   
                </tr>
                )}
            </tbody>
        </table>
    </div>
)
}

export default UserList;
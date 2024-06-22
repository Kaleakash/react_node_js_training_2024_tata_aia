import { useContext } from "react";
import { UserContext } from "./Context";

function DisplayUser() {
let {users}=useContext(UserContext)

console.log(users)


    return(
        <div>
            <h4>Display User</h4>
            {users.map((u,index)=><li key={index}>Name is {u.name} Age is {u.age}</li>)}
        </div>
    )
}

export default DisplayUser;
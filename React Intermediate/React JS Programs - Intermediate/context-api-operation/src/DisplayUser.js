import { useContext } from "react";
import { UserContext } from "./Context";
import { DeleteUser } from "./DeleteUser";

function DisplayUser() {
let {users}=useContext(UserContext)

//alert(users.name);
//console.log(users)


    return(
        <div>
            <h4>Display User</h4>
            {users.map((u,index)=>
            
            <li key={index}>FullName is {u.name} Age is {u.age}
                <DeleteUser index={index}></DeleteUser>   
            </li>)}
        </div>
    )
}

export default DisplayUser;
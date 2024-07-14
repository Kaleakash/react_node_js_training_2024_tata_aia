import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Logout() {
    let {logout}= useAuth();
let handleLogout = ()=> {
    logout();       // isLoggedIn set the value ot false. 
    navigate("/login")
}
let navigate = useNavigate();
    return(
        <div>
            <input type="button" value="Logout" onClick={handleLogout}/>
        </div>
    )
    }
    
    export default Logout;
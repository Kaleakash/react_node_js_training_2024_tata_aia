import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const withPrivateRouterHOC = (WrappedComponent)=> {

const ComponentWithPrivateRouter = (props)=> {
const {isLoggedIn}=useAuth();

return isLoggedIn? (<WrappedComponent {...props}/>):(<Navigate to="/login"></Navigate>) 

}


return ComponentWithPrivateRouter;
}


export default withPrivateRouterHOC;
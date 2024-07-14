import Logout from "./Logout";
import withPrivateRouterHOC from "./withPrivateRouterHOC";

function Dashboard() {


    return(
        <div>
            <h4>Welcome to Dashboard Page(private/protected page)</h4>
            <Logout></Logout>
        </div>
    )
    }
    
    export default withPrivateRouterHOC(Dashboard);
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
let navigate = useNavigate();

let user = sessionStorage.getItem("user");

let handleLogout= ()=> {
    sessionStorage.removeItem("user");
    navigate("/")
}
    return(
        <div>
            <h2>Welcome to Home Page

            <input type="button" value="logout" onClick={handleLogout}/>
            </h2>
            <h4>Welcome user {user}</h4>

            <div>
                <Link to="addproduct">Add Product</Link> |
                <Link to="viewproduct">View Product</Link> |
                <Link to="deleteproduct">Delete Product</Link> |
                <Link to="updateproduct">Update Product</Link>
            </div>
                <hr/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )

}

export default Dashboard;
import { useDispatch } from "react-redux";
import { hello } from "./slice";

function ActionComponent() {
let dispatch = useDispatch();
return(
    <div>
        <h3>Fire Action</h3>
        <input type="button" value="Click Here" onClick={()=>dispatch(hello())}/>
    </div>
)
}

export default ActionComponent;
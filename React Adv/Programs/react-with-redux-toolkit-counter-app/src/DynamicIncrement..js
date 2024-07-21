import { useDispatch } from "react-redux";
import { dynamicIncrement } from "./slice";

function DynamicIncrement() {
let dispatch  = useDispatch();
    return(
        <div>
            <h3>Dynamic Increment</h3>
            <input type="button" value="Dynamic Increment" onClick={()=>dispatch(dynamicIncrement(10))}/>
        </div>
    )
}

export default DynamicIncrement;
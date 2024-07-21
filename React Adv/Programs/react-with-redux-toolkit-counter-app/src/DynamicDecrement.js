import { useDispatch } from "react-redux";
import { dynamicDecrement} from "./slice";

function DynamicDecrement() {
let dispatch  = useDispatch();
    return(
        <div>
            <h3>Dynamic Decrement</h3>
            <input type="button" value="Dynamic Decrement" onClick={()=>dispatch(dynamicDecrement(5))}/>
        </div>
    )
}

export default DynamicDecrement;
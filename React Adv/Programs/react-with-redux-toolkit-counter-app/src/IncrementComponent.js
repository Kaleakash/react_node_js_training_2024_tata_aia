import { useDispatch } from "react-redux";
import { increment } from "./slice";

function IncrementComponent() {
let dispatch = useDispatch();

    return(
        <>
        <h4>Increment Value</h4>
        <input type="button" value="Increment" onClick={()=>dispatch(increment())}/>
        </>
    )

}

export default IncrementComponent;
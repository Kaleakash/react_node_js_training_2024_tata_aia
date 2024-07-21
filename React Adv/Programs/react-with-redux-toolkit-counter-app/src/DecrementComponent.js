import { useDispatch } from "react-redux";
import { decrement } from "./slice";

function DecrementComponent() {
let dispatch = useDispatch();

    return(
        <>
        <h4>Decrement Value</h4>
        <input type="button" value="Decrement" onClick={()=>dispatch(decrement())}/>
        </>
    )

}

export default DecrementComponent;
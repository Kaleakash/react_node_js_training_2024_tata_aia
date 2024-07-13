import { useDispatch } from "react-redux";

function DecrementComponent() {
let dispatch = useDispatch();

return(
    <div>
        <h3>Increment Component</h3>
        <input type="button" value="Decrement global state variable" onClick={()=>dispatch({type:"DECREMENT"})}/>
    </div>
)

}

export default DecrementComponent;
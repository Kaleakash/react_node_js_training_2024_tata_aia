import { useDispatch } from "react-redux";

function IncrementComponent() {
let dispatch = useDispatch();

return(
    <div>
        <h3>Increment Component</h3>
        <input type="button" value="Increment global state variable" onClick={()=>dispatch({type:"INCREMENT"})}/>
    </div>
)

}

export default IncrementComponent;
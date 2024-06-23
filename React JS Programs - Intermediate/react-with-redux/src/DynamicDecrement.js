import { useDispatch } from "react-redux";

function  DynamicDecrementComponent() {
let dispatch = useDispatch();

return(
    <div>
        <h3>Dynamic Decrement Component</h3>
        <input type="button" value="Increment global state variable" onClick={()=>dispatch({type:"DYNAMIC_DECREMENT",payload:50})}/>
    </div>
)

}

export default DynamicDecrementComponent;
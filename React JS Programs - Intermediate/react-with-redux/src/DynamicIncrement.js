import { useDispatch } from "react-redux";

function  DynamicIncrementComponent() {
let dispatch = useDispatch();

return(
    <div>
        <h3>Dynamic Increment Component</h3>
        <input type="button" value="Increment global state variable" onClick={()=>dispatch({type:"DYNAMIC_INCREMENT",payload:100})}/>
    </div>
)

}

export default DynamicIncrementComponent;
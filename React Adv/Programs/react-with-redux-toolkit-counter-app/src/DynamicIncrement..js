import { useDispatch } from "react-redux";
import { dynamicIncrement, hello } from "./slice";
import { useState } from "react";

function DynamicIncrement() {
let [n,setN]=useState(0);
let dispatch  = useDispatch();
    return(
        <div>
            <h3>Dynamic Increment</h3>
            {/* <input type="button" value="click here" onClick={hello()}/> */}
            {/* <input type="button" value="Dynamic Increment" onClick={dispatch(dynamicIncrement(10))}/> */}
            <input type="number" value={n} onChange={(event)=>setN(event.target.value)}/><br/>
            <input type="button" value="Dynamic Increment" onClick={()=>dispatch(dynamicIncrement(n))}/>
        </div>
    )
}

export default DynamicIncrement;
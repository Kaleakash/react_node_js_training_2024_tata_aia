import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
let [count,setCount]=useState(0)

const handleClick = useCallback(()=> {
    console.log("parent function called...")
    setCount(previousCount=>previousCount+1);
} ,[])
    return(
        <div>
            <h4>ParentComponent </h4>
            <input type="button" value="Parent Component Button" onClick={handleClick}/>
            <ChildComponent onHandleClick={handleClick}></ChildComponent>
            <br/>
            <p>Count is value {count}</p>
        </div>
    )

}

export default ParentComponent;
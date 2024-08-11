import React, { useState } from "react";

let Child1= React.memo(()=> {
let [count,setCount]=useState(0)
    console.log("child1 component")
    return(
        <div>
            <h2>Child 1 Component</h2>
            <input type="button" value="count value change in child1" onClick={()=>setCount(count+1)}/>
            <p>Count value in child1 {count}</p>
        </div>
    )

}) 

export default Child1;
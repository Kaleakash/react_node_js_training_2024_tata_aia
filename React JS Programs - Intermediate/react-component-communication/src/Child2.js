import { useState } from "react";

function Child2({pname}) {
let [child2,setChild2]=useState("Raju");
    return(
        <div style={{backgroundColor:"yellow",height:"100px"}}>
            <h3>Child2 Component</h3>
            <p>Child2 name in child2 component is {child2}</p>
            <p>Parent name in child1 component is {pname}</p>
        </div>
    )
}

export default Child2;
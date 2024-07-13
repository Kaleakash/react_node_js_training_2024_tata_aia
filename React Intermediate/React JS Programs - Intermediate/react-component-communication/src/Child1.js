import { useState } from "react";

function Child1(props) {
let [child1,setChild1]=useState("Ajay");
    return(
        <div style={{backgroundColor:"orange",height:"150px"}}>
            {props.passChild1Value(child1)}
            <h3>Child1 Component</h3>
            <p>Child1 name in child1 component is {child1}</p>
            <p>Parent name in child1 component is {props.pname}</p>
 
            <p>Child2 name in child1 component is {props.child2Data}</p>
        </div>
    )
}

export default Child1;
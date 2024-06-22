import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [parentName,setParentName]=useState("Admin");

    return(
        <div style={{backgroundColor:"gray",height:"400px"}}>
            <h3>Parent Component</h3>
            <p>Parent name in parent component is {parentName}</p>
            <Child1 pname={parentName}></Child1>
            <Child2 pname={parentName}></Child2>
        </div>
    )
}

export default Parent;
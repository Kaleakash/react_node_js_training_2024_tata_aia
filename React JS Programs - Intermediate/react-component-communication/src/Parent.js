import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
function Parent() {
let [parentName,setParentName]=useState("Admin");
let [child1Data,setChild1Data]=useState("");
let [child2Data,setChild2Data]=useState("");
let receiveChild1Value=(data)=> {
    console.log(data)
    setChild1Data(data);
}
let receiveChild2Value=(data)=> {
    console.log(data)
    setChild2Data(data);
}
    return(
        <div style={{backgroundColor:"gray",height:"500px"}}>
            <h3>Parent Component</h3>
            <p>Parent name in parent component is {parentName}</p>
            <p>Child1 name in parent component is {child1Data}</p>
            <p>Child2 name in parent component is {child2Data}</p>
            <Child1 pname={parentName} passChild1Value={receiveChild1Value} child2Data={child2Data}></Child1>
            <Child2 pname={parentName} passChild2Value={receiveChild2Value} child1Data={child1Data}></Child2>
        </div>
    )
}

export default Parent;
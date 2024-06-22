import { useContext, useState } from "react";
import Child3 from "./Child3";
import Child4 from "./Child4";
import { ChildContext, RootContext } from "./Context";

function Child1(props) {
let data = useContext(RootContext);
let [id,setId]=useState(100)
let [name,setName]=useState("Raj")

let hello= (info)=> {
    console.log("event fired "+info)
}
    return(
        <ChildContext.Provider value={{id,name,hello}}>
        <div>
            <h3>Child1 Component</h3>
            <p>Admin name in child1 component using context {data}</p>
            <p>Admin name in child1 component using props {props.name}</p>
            <Child3></Child3>
            <Child4></Child4>
        </div>
        </ChildContext.Provider>
    )
}

export default Child1;
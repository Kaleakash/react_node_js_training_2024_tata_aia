import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { RootContext } from "./Context";

function Parent() {
let [admin,setAdmin]=useState("Admin");
    return(
        <RootContext.Provider value={admin}>
            <div>
                <h3>Parent Component</h3>
                <p>Admin name in parent component is {admin}</p>
                <Child1 name={admin}></Child1>
                <Child2> </Child2>
            </div>
        </RootContext.Provider>
    )
}

export default Parent;
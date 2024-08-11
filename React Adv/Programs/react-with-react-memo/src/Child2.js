import React from "react";

let Child2= React.memo(({n})=> {
    console.log("child2 component")
    return(
        <div>
            <h2>Child 2 Component props value is {n}</h2>
        </div>
    )

}) 

export default Child2;
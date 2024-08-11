import React from "react";

let ChildComponent= React.memo(({onHandleClick})=> {

    console.log("child component")
    return(
        <div>
            <h4>Child Component</h4>
            <input type="button" value="Child Component button" onClick={onHandleClick}/>
        </div>
    )

})

export default ChildComponent;
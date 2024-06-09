import { useState } from "react";

function UseStateBasicExample() {
//console.log(useState());  // default undefined 
//console.log(useState(10));  // default 10
//console.log(useState("Ravi"));  // default ravi
//let value = useState("Ravi")[0];    // 0 index position 
//let fun = useState("Ravi")[1];      // 1 index position 
//console.log(value)
//console.log(fun)
let count = 10;         // normal variable 
let [name,setName]=useState("Ravi");// it state variable 
let [n,setNumber]=useState(100);
let handleButton=()=> {     // if we want to do any changes we need 2nd parameter then it will re-render.
    count=count+1
    name = "Mr "+name;
    setName(name);
    setNumber(n+1)
    console.log(count)
    console.log(name);
}
    return(
        <div>
            <h4>UseState Example</h4>
            <p>Name is {name} and count is {count} value is {n}</p>
            <input type="button" value="Change Name"
            onClick={handleButton}/>
        </div>
    )
}

export default UseStateBasicExample;
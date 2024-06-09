import { useEffect, useState } from "react";

function UseEffectBasicExample() {
let [m,setM]=useState(1);
let [n,setN]=useState(1);
let fun1 = (event)=> {
    console.log("fun1 user defined function")
    setM(m+1);      // it will re-render 
}
let fun2 = (event)=> {
    console.log("fun2 user defined function")
    setN(n+1);
}
//fun1();
// useEffect(()=> { // initial it called whenever re-render it call again and again
//     console.log("use effect function called...")   
// })

// useEffect(()=> {    // it call only once 
//     console.log("use effect with empty dependency array")
// },[])
// useEffect with dependent property 
useEffect(()=> {    // it call only once 
    console.log("use effect with m dependent variable")
},[m])
useEffect((event)=> {    // it call only once 
    console.log(event)
    console.log("use effect with n dependent variable")
},[n])
    return(
        <>
        <h4>UseEffect Basic Example</h4>
        <p>Value of m {m} and value of n {n}</p>
        <input type="button" value="Chang value of m" onClick={fun1}/><br/>
        <input type="button" value="Chang value of n" onClick={fun2}/><br/>
        </>
    )
}

export default UseEffectBasicExample;
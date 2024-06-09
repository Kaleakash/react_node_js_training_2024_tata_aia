import { useState } from "react";

const names = ["Ravi","Mahesh","Lokesh","Steven","John"]; // 

function ArrayStateVariable(){

let [snames,setSname]=useState(names);

let deleteName=(event,sname,index)=> {
    console.log(event)
    console.log(sname+" "+index)
let newNames = snames.filter(name=>name!=sname);// it generate new array value expect sname value 
    newNames.forEach((v,i)=>console.log(v+" "+i))
    setSname(newNames); // re-render 
}
    return(
        <>
            <h3>Students names</h3>
    {snames.map((sname,index)=>
        <li key={index}>
            {sname}

<input type="button" value="Delete" onClick={(event)=>deleteName(event,sname,index)}/>
        </li>)}
        </>
    )
}

export default ArrayStateVariable;
import { useState } from "react";

function ControlledComponent() {
let [num,setNum]=useState(0);

let handleNum= (event)=> {
    console.log(num);
    setNum(num);
}
    return(
        <div>
            Number is {num}<br/>
            Number :<input type="number" name="num" value={num} onChange={(event)=>setNum(event.target.value)}/>
            <input type="button" value="Click Here" onClick={handleNum}/>
        </div>
    )
}

export default ControlledComponent;
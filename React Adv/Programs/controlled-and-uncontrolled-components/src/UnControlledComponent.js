import { useRef } from "react";

function UnControlledComponent() {
let inputRef = useRef(null);
let num;
let handleNum = ()=> {
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    num = inputRef.current.value;
    // pass this value to backend technologies or call rest api. that result we store in state variable. 
    // to display on browser. 
}
    return(
        <div>
            Number is {num}<br/>
            Number :<input type="number" ref={inputRef}/>
            <input type="button" value="Click Here" onClick={handleNum}/>
        </div>
    )

}

export default UnControlledComponent;
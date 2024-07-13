import { useState } from "react";
import { useSelector } from "react-redux";
import SecondComponent from "./SecondComponent";

function FirstComponent() {
let [n,setN]=useState(10);
let m = useSelector(gs=>gs.counter)
    return(
        <div>
            <h3>First Component</h3>
            <p>Local state variable part of First Component is {n}</p>
    <input type="button" value="Decrement local state variable" onClick={()=>setN(n-1)}/>
            <p>Global state variable part of redux store is {m}</p>
            <SecondComponent></SecondComponent>
        </div>
    )
}

export default FirstComponent;
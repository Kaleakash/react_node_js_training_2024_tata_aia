import { useState } from "react";
import { useSelector } from "react-redux";

function SecondComponent() {
let [n,setN]=useState(20);
let m = useSelector(gs=>gs.counter)
    return(
        <div>
            <h3>Second Component</h3>
            <p>Local state variable part of First Component is {n}</p>
            <p>Global state variable part of redux store is {m}</p>
        </div>
    )
}

export default SecondComponent;
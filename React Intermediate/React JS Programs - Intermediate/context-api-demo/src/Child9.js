import { useContext } from "react";
import { ChildContext } from "./Context";

function Child9() {
let {id,hello}=useContext(ChildContext);
    return(
        <div>
            <h3>Child9 Component</h3>
            <p>Id is {id}</p>
            <input type="button" value="Child9 component button" onClick={()=>hello("Child9")}/>  
        </div>
    )
}

export default Child9;
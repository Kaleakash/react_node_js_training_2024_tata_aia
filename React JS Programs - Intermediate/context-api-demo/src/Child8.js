import { useContext } from "react";
import { RootContext } from "./Context";
import Child9 from "./Child9";

function Child8() {
let data = useContext(RootContext)
    return(
        <div>
            <h3>Child8 Component</h3>
            <p>Admin name in child8 component using context {data}</p>
            <Child9></Child9>
        </div>
    )
}

export default Child8;
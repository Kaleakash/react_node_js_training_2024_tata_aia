import { useContext } from "react";
import Child3 from "./Child3";
import Child4 from "./Child4";
import { RootContext } from "./Context";

function Child1(props) {
let data = useContext(RootContext);

    return(
        <div>
            <h3>Child1 Component</h3>
            <p>Admin name in child1 component using context {data}</p>
            <p>Admin name in child1 component using props {props.name}</p>
            <Child3></Child3>
            <Child4></Child4>
        </div>
    )
}

export default Child1;
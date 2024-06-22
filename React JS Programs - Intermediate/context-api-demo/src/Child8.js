import { useContext } from "react";
import { ChildContext, RootContext } from "./Context";
import Child9 from "./Child9";

function Child8() {
let data = useContext(RootContext)
let emp = useContext(ChildContext);
    return(
        <div>
            <h3>Child8 Component</h3>
            <p>Admin name in child8 component using context {data}</p>
            <p>Id is {emp.id} name name {emp.name}</p>
            <Child9></Child9>
        </div>
    )
}

export default Child8;
import { useContext } from "react";
import { RootContext } from "./Context";

function Child6() {
let data = useContext(RootContext)
    return(
        <div>
            <h3>Child6 Component</h3>
            <p>Admin name in child6 component using context {data}</p>
        </div>
    )
}

export default Child6;
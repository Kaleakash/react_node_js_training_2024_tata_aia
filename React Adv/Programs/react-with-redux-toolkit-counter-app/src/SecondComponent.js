import { useSelector } from "react-redux";

function SecondComponent() {
let n = useSelector(gs=>gs.counter.n)
    return(
        <div>
            <h2>Second Component global state variable is {n}</h2>
        </div>
    )
}

export default SecondComponent;
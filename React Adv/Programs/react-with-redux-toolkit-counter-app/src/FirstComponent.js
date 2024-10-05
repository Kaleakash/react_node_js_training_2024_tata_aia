import { useSelector } from "react-redux";

function FirstComponent() {
let value = useSelector(gs=>gs.counter.value)
console.log(value)
console.log(value)
    return(
        <div>
            <h2>First Component global state variable is {value}</h2>
        </div>
    )
}

export default FirstComponent;
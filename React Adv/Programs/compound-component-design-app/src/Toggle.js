import { useToggle } from "./ToggleProvider";

function Toggle() {
let {on,toggle}=useToggle();

    return(
        <div>
            <input type="button" value={on?"Toggle Off":"Toggle On"} onClick={toggle}></input>
        </div>
    )
}

export default Toggle;
import { useToggle } from "./ToggleProvider";

function ToggleConsumer({children}) {
let {on}=useToggle();
    
    return on?children:null;
}

export default ToggleConsumer;
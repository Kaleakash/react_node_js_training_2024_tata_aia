import { createContext, useContext, useState } from "react";
let ToggleContext = createContext();            // context api reference 

export let useToggle = ()=>useContext(ToggleContext);       // it is use to access on and toggle function 
                                                                    // Toggle as well as toggle consumer component     
function ToggleProvider({children}) {
let [on,setOn]=useState(false);
console.log(children)
let toggle = ()=>setOn(!on);

    return(
        <ToggleContext.Provider value={{on,toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider;


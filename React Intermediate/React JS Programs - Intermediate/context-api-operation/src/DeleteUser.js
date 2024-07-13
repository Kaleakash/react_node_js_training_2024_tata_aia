//export let DeleteUser=(props)=><input type="button" value="Delete"/>

import { useContext } from "react"
import { UserContext } from "./Context"

export let DeleteUser=({index})=> {

let {dispatchUser}=useContext(UserContext)

    return(
        <input type="button" value="Delete" onClick={()=>dispatchUser({type:"DELETE",payload:index})}/>
    )
}


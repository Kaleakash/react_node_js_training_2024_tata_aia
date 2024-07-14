import { createContext, useContext, useState } from "react";
let AuthContext = createContext();      // hook which help to create the context reference. 
export const AuthProvider = (props)=> {
    let [isLoggedIn,setIsLoggedIn]=useState(false);     // base upon login we can set true or false. 

    
    let login = (emailid,password)=> {                  // login function 
        if(emailid=="akash@gmail.com" && password=="123"){
            setIsLoggedIn(true);
            return true;
        }else {
            return false;
        }
    }

    let logout = ()=>setIsLoggedIn(false);          // logout function 

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
                {props.children}
        </AuthContext.Provider>
    )

}
export let useAuth = useContext(AuthContext);   

// useAuth is use to call in every component which is child of Authprovide 
//to access isLoggedin, login and logout function 
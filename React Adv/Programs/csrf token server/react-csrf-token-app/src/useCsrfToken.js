import axios from "axios";
import { useEffect, useState } from "react";

function useCsrfToken() {
let [csrfToken,setCsrfToken]=useState("");

    useEffect(()=> {

        const fetchCsrfToken = async ()=> {
                try{
                let response = await axios("http://localhost:3001/api/csrf-token",{
                    withCredentials:true
                })
                //console.log(response.data.csrfToken)
                setCsrfToken(response.data.csrfToken)
                }catch(error){
                    console.log("error generate  "+error)
                }
        }
        fetchCsrfToken();
        
    },[])

    return csrfToken;
}

export default useCsrfToken;
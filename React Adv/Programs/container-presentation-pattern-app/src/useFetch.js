import { useEffect, useState } from "react";

function useFetch(url="https://dummyjson.com/users"){

let [users,setUsers]=useState([]);
let [isLoading,setIsLoading]=useState(true);
useEffect(()=> {
    setTimeout(()=> {
        const loadUserInfo=()=>{
            fetch(url).
            then(res=>res.json()).
            then(result=>{
                console.log(result.users)
                setUsers(result.users)    
            }).
            catch(error=>console.log(error))
        }
        setIsLoading(false);
        loadUserInfo();
    },3000);
   
},[])
return [users,isLoading,setUsers,setIsLoading];
}

export default useFetch;
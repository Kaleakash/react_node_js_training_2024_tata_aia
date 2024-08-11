import axios from "axios";
import { useEffect, useState } from "react";

function SearchComponent() {
let [query,setQuery]=useState("");
let [result,setResult]=useState([])

let url ="https://dummyjson.com/users/search?q=";

useEffect(()=> {
    axios.get(url+query).then(result=>
        //console.log(result.data),
        //console.log(result.data.users)
        setResult(result.data.users)
    ).catch(error=>console.log(error))
},[query])

    return(
        <div>
            <h2>Search Component with debounc</h2>
            <label>Search Data</label>
            <input type="search" name="query" onChange={(event)=>setQuery(event.target.value)}/>
            <hr/>
            {
            result.map((user,index)=>
        <p key={index}>First Name {user.firstName} Last Name : {user.lastName} Emailid {user.email}</p>
            )
            }
        </div>
    )

}


export default SearchComponent;
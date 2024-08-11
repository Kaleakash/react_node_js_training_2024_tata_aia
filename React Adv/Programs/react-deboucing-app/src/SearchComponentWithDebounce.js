import axios from "axios";
import { debounce } from "lodash";
import { useState } from "react";
function SearchComponentWithDebounce() {
let [result,setResult]=useState([])
let url ="https://dummyjson.com/users/search?q=";
const fetchData= async (queryValue)=> {
    console.log(queryValue)
    axios.get(url+queryValue).then(result=>
        setResult(result.data.users)
    ).catch(error=>console.log(error))
}
const fetchDataUsingDebounce = debounce(fetchData,1000)

const querySet=(event)=> {
    let queryValue = event.target.value;
    console.log("querySet "+queryValue)
    fetchDataUsingDebounce(queryValue)
}
    return(
        <div>
            <h2>Search Component with debounc</h2>
            <label>Search Data</label>
            <input type="search" name="query" onChange={querySet}/>
            <hr/>
            {
            result.map((user,index)=>
        <p key={index}>First Name {user.firstName} Last Name : {user.lastName} Emailid {user.email}</p>
            )
            }
        </div>
    )

}


export default SearchComponentWithDebounce;
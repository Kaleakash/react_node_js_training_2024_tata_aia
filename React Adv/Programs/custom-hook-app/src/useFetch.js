import { useEffect, useState } from "react";

function useFetch(url) {   
    let [data,setData]=useState([]);
    useEffect(()=> {
        fetch(url).then(res=>res.json()).
        then(result=>setData(result)).
        catch(error=>console.log(error));
        console.log("called..")
    },[url])
    return [data]
}
export default useFetch;
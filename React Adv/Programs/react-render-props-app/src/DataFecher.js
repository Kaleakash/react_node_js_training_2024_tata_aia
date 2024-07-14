import { useEffect, useState } from "react";

function DataFetch({url="https://fakestoreapi.com/products",render}){
let [data,setData]=useState([]);
let [loading,setLoading]=useState(true);
let [error,setError]=useState();

useEffect(()=> {

    fetch(url).then(res=>res.json()).then(result=> {
        console.log(result)
        setData(result);
        setLoading(false);
    }).catch(error=>{
            setError(error)
            setLoading(false);
    })

},[url])

return render({data,loading,error});

}

export default DataFetch;
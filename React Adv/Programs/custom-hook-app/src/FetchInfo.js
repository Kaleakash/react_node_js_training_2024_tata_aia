// import { useEffect, useState } from "react";

import useFetch from "./useFetch";

// function FetchInfo() {

// let [data,setData]=useState([]);

// useEffect(()=> {
//     fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).
//     then(result=>setData(result)).catch(error=>console.log(error));
// },[])

// return(
//     <div>
//         {data.map((u,index)=> 
//             <div key={index}>{u.id}) {u.title}</div>
//         )}
//     </div>
// )
// }

// export default FetchInfo;


function FetchInfo() {
// custom hook to load the data. 
let [data]=useFetch("https://fakestoreapi.com/products")

return(
    <div>
        {data.map((u,index)=> 
            <div key={index}>{u.id}) {u.title}</div>
        )}
    </div>
)
}

export default FetchInfo;





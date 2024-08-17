import DOMPurify from "dompurify";
import { useState } from "react";

function DataComponentPurify() {
let [data,setData]=useState([]);
let [newData,setNewData]=useState();

let handleData=()=> {
    console.log(newData)
    let sanitizeData = DOMPurify.sanitize(newData);
    setData(previousData=>{return [...previousData,sanitizeData]});
    setNewData("");
}
    return(
        <div>
            <textarea placeholder="Add the data" value={newData} onChange={(event)=>setNewData(event.target.value)}></textarea>
            <input type="button" value="Add Data" onClick={handleData}/>
            <br/>
            <h2>Your Data with DOMPurify</h2>
            {data.map((d,index)=>
                <div> 
                <h1>Hi</h1>
                <p key={index} dangerouslySetInnerHTML={{__html:d}}></p>
                <span dangerouslySetInnerHTML={{__html:"Hello"}}></span>
                </div>
            )}
        </div>
    )
}


export default DataComponentPurify;
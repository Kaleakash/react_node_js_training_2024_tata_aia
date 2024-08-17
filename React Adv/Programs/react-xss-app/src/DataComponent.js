import { useState } from "react";

function DataComponent() {
let [data,setData]=useState([]);
let [newData,setNewData]=useState();

let handleData=()=> {
    console.log(newData)
    setData(previousData=>{return [...previousData,newData]});
    setNewData("");
}
    return(
        <div>
            <textarea placeholder="Add the data" value={newData} onChange={(event)=>setNewData(event.target.value)}></textarea>
            <input type="button" value="Add Data" onClick={handleData}/>
            <br/>
            <h2>Your Data</h2>
            {data.map((d,index)=> 
                <p key={index} dangerouslySetInnerHTML={{__html:d}}></p>
            )}
        </div>
    )
}


export default DataComponent;
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddEmployee() {
let [empData,setEmpData]=useState({});

let dispatch = useDispatch();

let handleSubmit=(event)=> {
    event.preventDefault();
    console.log(empData);
    dispatch({type:"ADD_EMPLOYEE",payload:empData})
    setEmpData({id:"",name:"",age:""});
}
    return(
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>Id</label>
            <input type="number" name="id" value={empData.id} onChange={(event)=>setEmpData(data=>{return {...data,id:event.target.value}})}/><br/>
            <label>name</label>
            <input type="text" name="name" value={empData.name} onChange={(event)=>setEmpData(data=>{return {...data,name:event.target.value}})}/><br/>
            <label>Age</label>
            <input type="number" name="age" value={empData.age} onChange={(event)=>setEmpData(data=>{return {...data,age:event.target.value}})}/><br/>
            <input type="submit" value="Add Data"/>
            </form>
        </div>
    )
}


export default AddEmployee;
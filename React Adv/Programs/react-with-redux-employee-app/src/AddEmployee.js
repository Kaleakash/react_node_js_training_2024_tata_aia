import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddEmployee() {
let [empData,setEmpData]=useState({});
let [error,setError]=useState();
let dispatch = useDispatch();
let employees = useSelector(gs=>gs.employees);

let handleSubmit=(event)=> {
    event.preventDefault();
    console.log(empData);
    if(empData.id==undefined || empData.name==undefined || empData.age==undefined){
        setError("required");
    }else {
        let result = employees.find(emp=>emp.id==empData.id);
        if(result==undefined){
            dispatch({type:"ADD_EMPLOYEE",payload:empData})
            setEmpData({id:"",name:"",age:""});
            setError("");
        }else {
            setError("Id must be unique");
        }
    }
}
    return(
        <div>
            <span style={{"color":"red"}}>{error}</span>
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
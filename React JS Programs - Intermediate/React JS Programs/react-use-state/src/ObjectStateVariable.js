import { useState } from "react";
function ObjectStateVariable() {
let [id,setId]=useState(100);
let [name,setName]=useState("Ravi");
let [salary,setSalary]=useState(12000);
    let [employee,setEmployee]=useState({id:102,name:"Vijay",salary:34000}); // object state variable 
let handleEmployeeInfo1=(event)=> {
    console.log(id+" "+name+" "+salary)
    setId(101)
    setName("Raju");
    setSalary(14000)
let emp = {"id":id,"name":name,"salary":salary}
    console.log(emp);       // we can pass to backend technologies. 
}
let handleEmployeeInfo2=(event)=> {
    //setEmployee(104)          error 
    //setEmployee({name:"Ajay"});  // updating one property remaining property lose
   //setEmployee({id:103,name:"Ajay",salary:38000});  // update all property
   setEmployee({...employee,id:103}); // partial object ...previousobject,property:value
    console.log(employee)
}
return(
    <>
    <h4>Object State variable</h4>
    <h5>Employee details</h5>
    <p>Id is {id} Name is {name} salary is {salary}</p>
    <input type="button" value="Change Value" onClick={handleEmployeeInfo1}/><br/>
    <hr/>
    <h5>Employee details</h5>
    <p>Id is {employee.id} name is {employee.name} salary is {employee.salary}</p>
    <input type="button" value="Change Value" onClick={handleEmployeeInfo2}/><br/>
    </>
)
}

export default ObjectStateVariable;
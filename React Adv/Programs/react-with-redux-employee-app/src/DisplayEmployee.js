import { useSelector } from "react-redux";
import DeleteEmployee from "./DeleteEmployee";

function DisplayEmployee() {
let msg = useSelector(gs=>gs.msg)
let employees = useSelector(gs=>gs.employees);

    return(
        <>
        <h4>{msg}</h4>
        <div>All Employee details</div>
        {
            employees.map((emp,index)=>
                <li key={index}>Id is {emp.id} name is {emp.name} age is {emp.age}
                <DeleteEmployee id={emp.id}/>
                </li>
            )
        }
        
        </>
    )
}

export default DisplayEmployee;
import { useSelector } from "react-redux";

function DisplayEmployee() {

let employees = useSelector(gs=>gs.employees);

    return(
        <>
        <div>All Employee details</div>
        {
            employees.map((emp,index)=>
            
                <li key={index}>Id is {emp.id} name is {emp.name} age is {emp.age}</li>
            
            )
        }
        
        </>
    )
}

export default DisplayEmployee;
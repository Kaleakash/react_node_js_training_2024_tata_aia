import { useDispatch } from "react-redux";

function DeleteEmployee({id}) {
let dispatch = useDispatch();
let handleDelete= ()=> {

    console.log(id);
    dispatch({type:"DELETE_EMPLOYEE",payload:id})
}

    return(
        <input type="button" value="Delete" onClick={handleDelete}/>
    )
}

export default DeleteEmployee;
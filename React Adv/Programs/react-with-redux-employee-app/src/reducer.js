let initialState = {
    msg:"Welcome to React with Redux",
    employees:[
        {id:100,name:"Ravi",age:21},
        {id:101,name:"Ajay",age:24},
    ]
}
function reducer(state=initialState,action){
    console.log(action)
    if(action.type=="ADD_EMPLOYEE"){
        return {
            ...state,employees:state.employees.concat(action.payload)
        }
    }
    if(action.type=="DELETE_EMPLOYEE"){
        return {
            ...state,employees:state.employees.filter(emp=>emp.id!=action.payload)
        }
    }

    return state;
}

export default reducer;
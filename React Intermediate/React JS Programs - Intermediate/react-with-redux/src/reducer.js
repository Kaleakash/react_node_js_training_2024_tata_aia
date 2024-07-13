let initialState = {
    counter:100,                     // number type. it can be string, object or array type 
    employees:[{id:100,name:"Ravi",age:21},{id:101,name:"Raju",age:26}]
}

function reducer(state=initialState,action){

    // base upon action we can do the changes on state variable. 
    console.log(action)
    if(action.type=="INCREMENT"){
        // state.counter = state.counter+1;
        // console.log(state.counter)      // local update not re-render 
        //return state.counter+1;
        return {...state,counter:state.counter+1}     // 1st old initial state, 2nd property state counter, 3rd parameter value
    }
    if(action.type=="DYNAMIC_INCREMENT"){
        // state.counter = state.counter+1;
        // console.log(state.counter)      // local update not re-render 
        //return state.counter+1;
        return {...state,counter:state.counter+action.payload}     // 1st old initial state, 2nd property state counter, 3rd parameter value
    }
    if(action.type=="DECREMENT"){
        // state.counter = state.counter+1;
        // console.log(state.counter)      // local update not re-render 
        //return state.counter+1;
        return {...state,counter:state.counter-1}     // 1st old initial state, 2nd property state counter, 3rd parameter value
    }
    if(action.type=="DYNAMIC_DECREMENT"){
        // state.counter = state.counter+1;
        // console.log(state.counter)      // local update not re-render 
        //return state.counter+1;
        return {...state,counter:state.counter-action.payload}     // 1st old initial state, 2nd property state counter, 3rd parameter value
    }
    if(action.type=="ADD_EMPLOYEE"){
        return {...state,employees:state.employees.concat(action.payload)}
    }
    return state;

}

export default reducer;
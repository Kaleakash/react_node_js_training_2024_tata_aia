let initialState = {
    counter:100                     // number type. it can be string, object or array type 
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
    if(action.type=="DECREMENT"){
        // state.counter = state.counter+1;
        // console.log(state.counter)      // local update not re-render 
        //return state.counter+1;
        return {...state,counter:state.counter-1}     // 1st old initial state, 2nd property state counter, 3rd parameter value
    }
    return state;

}

export default reducer;
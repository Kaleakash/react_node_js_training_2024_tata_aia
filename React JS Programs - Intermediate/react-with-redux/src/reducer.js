let initialState = {
    counter:100                     // number type. it can be string, object or array type 
}

function reducer(state=initialState,action){

    // base upon action we can do the changes on state variable. 
    console.log(action)
    return state;
}

export default reducer;
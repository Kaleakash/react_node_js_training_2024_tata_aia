import {createSlice} from '@reduxjs/toolkit'


let counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:100,
        n:123
    },
    reducers:{
        increment(state,action){
                console.log("increment "+state)
                state.value = state.value+1
                console.log(action)
        },
        decrement(state,action) {
            console.log("decrement "+state)
            state.value = state.value-1
            console.log(action)
        },
        hello(state) {
            console.log("event fired")
            console.log(state)
            console.log(state.n+" "+state.value)
        },
        dynamicIncrement(state,action){
            console.log(action)
            state.value = state.value+action.payload;
        },
        dynamicDecrement(state,action){
            console.log(action)
            state.value = state.value-action.payload;
        }
        
        // we can write more than one function 
    }
})

export const {increment,decrement,hello,dynamicIncrement,dynamicDecrement}=counterSlice.actions     // increment and decrement we can all in each 
                                                            // component with help of useDispatch() 
export default counterSlice.reducer;            // to link store.js file with configureStore 
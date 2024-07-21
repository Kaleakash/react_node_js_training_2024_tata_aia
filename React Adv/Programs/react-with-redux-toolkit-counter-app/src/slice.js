import {createSlice} from '@reduxjs/toolkit'


let counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:100,
        n:123
    },
    reducers:{
        increment(state){
                console.log("increment "+state)
                state.value = state.value+1
        },
        decrement(state) {
            console.log("decrement "+state)
            state.value = state.value-1

        }
        // we can write more than one function 
    }
})

export const {increment,decrement}=counterSlice.actions     // increment and decrement we can all in each 
                                                            // component with help of useDispatch() 
export default counterSlice.reducer;            // to link store.js file with configureStore 
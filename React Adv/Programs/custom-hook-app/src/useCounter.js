import { useEffect, useState } from "react";



function useCounter(initialCount=0){
    let [counter,setCounter]=useState(initialCount);

    useEffect(()=> {
        console.log(`Counter value is ${counter}`)
    },[counter])

    return [counter,setCounter]
}

export default useCounter;
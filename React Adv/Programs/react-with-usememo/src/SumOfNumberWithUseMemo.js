import { useMemo, useState } from "react";

function SumOfNumberWithUseMemo(){
let [numbers,setNumber]=useState([1,2,3,4,5]);
let [num,setNum]=useState(0);
const calculate= ()=> {
    console.log("calculate function called with useMemo")
    return numbers.reduce((previousValue,currentValue)=>{
        //console.log(previousValue+" "+currentValue)
        return previousValue+currentValue
    },0)
}

let sum = useMemo(()=>calculate(),[numbers])

let addNumberInArray =()=> {
    let result = numbers.find(n=>n==num)
    if(result==undefined){
    setNumber([...numbers,eval(num)]);
    }else {
        console.log("already that number present")
    }
}
    return(
        <div>
        <input type="text" name="num" onChange={(event)=>setNum(event.target.value)}/><br/>
       <input type="button" value="calculate" onClick={addNumberInArray}/>
        <br/>
        <p>Sum of number is {sum}</p>

    </div>
    )
}



export default SumOfNumberWithUseMemo;
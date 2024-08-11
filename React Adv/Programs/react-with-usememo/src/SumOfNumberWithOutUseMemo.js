import { useState } from "react";

function SumOfNumberWithOutUseMemo() {

let [numbers,setNumber]=useState([1,2,3,4,5]);
let [num,setNum]=useState(0);
    const calculate = ()=> {
        console.log("calculate function called without useMemo")
       // return 100;
       //numbers.reduce()
       return numbers.reduce((previousValue,currentValue)=>{
       // console.log(previousValue+" "+currentValue)
        return previousValue+currentValue
    },0)
    }
    // this sum hold result calling by calculate function
    let sum = calculate();
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
            <h2>Calculate Sum without UseMemo</h2>
            <input type="text" name="num" onChange={(event)=>setNum(event.target.value)}/><br/>
           <input type="button" value="calculate" onClick={addNumberInArray}/>
            <br/>
            <p>Sum of number is {sum}</p>

        </div>
    )
}


export default SumOfNumberWithOutUseMemo;
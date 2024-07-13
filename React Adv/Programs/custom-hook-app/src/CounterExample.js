import useCounter from "./useCounter";
function CounterExample(){

const [count,setCount]=useCounter(10);
    return(
        <div>
            <h3>Simple Counter using Custom Hook</h3>
            <p>Count value is {count}</p>
<input type="button" value="Increment" onClick={()=>setCount(count+1)}/>
        </div>
    )
}
export default CounterExample;
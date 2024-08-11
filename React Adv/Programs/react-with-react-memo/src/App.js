import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';
import { useState } from 'react';

function App() {
  let [count,setCount]=useState(0);
  console.log("parent component")
  return (
    <div>
      <h2>Parent Component</h2>
      <input type="button" value="change count value in parent" onClick={()=>setCount(count+1)}/><br/>
      <p>Count value in parent component is {count}</p>
      <Child1></Child1>
      <Child2 n={count}></Child2>
    </div>
  );
}

export default App;

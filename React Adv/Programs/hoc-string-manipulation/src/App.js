import logo from './logo.svg';
import './App.css';
import TextComponents from './TextComponents';
import { useState } from 'react';
import withLowerCase from './withLowerCase';
import withUpperCase from './withUpperCase';
import withSubstring from './withSubstring';

function App() {
  let[msg,setMessage]=useState("Welcome to React JS with HOC concept")


  let TextComponentWithLowerCase = withLowerCase(TextComponents);
  let TextComponentWithUpperCase = withUpperCase(TextComponents);
  let TextComponentWithSubString = withSubstring(TextComponents);
  
  return (
    <div className="App">
     <TextComponents text={msg}></TextComponents>
      <TextComponentWithLowerCase text={msg}></TextComponentWithLowerCase>
      <TextComponentWithUpperCase text={msg}></TextComponentWithUpperCase>
      <TextComponentWithSubString text={msg} start="2" end="5"></TextComponentWithSubString>
    </div>
  );
}

export default App;

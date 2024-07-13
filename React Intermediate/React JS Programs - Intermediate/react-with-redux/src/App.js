import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import IncrementComponent from './IncrementComponent';
import DecrementComponent from './DecrementComponent';
import DynamicDecrementComponent from './DynamicDecrement';
import DynamicIncrementComponent from './DynamicIncrement';
import DisplayEmployee from './DisplayEmployee';
import AddEmployee from './AddEmployee';

function App() {
  return (
    <div className="App">
      <h2>React with Redux Example!</h2>
      {/* <FirstComponent></FirstComponent> */}
      {/* <IncrementComponent></IncrementComponent>
      <DecrementComponent></DecrementComponent> */}
      {/* <DynamicDecrementComponent></DynamicDecrementComponent>
      <DynamicIncrementComponent></DynamicIncrementComponent> */}
      <AddEmployee></AddEmployee>
      <DisplayEmployee></DisplayEmployee>
    </div>
  );
}

export default App;

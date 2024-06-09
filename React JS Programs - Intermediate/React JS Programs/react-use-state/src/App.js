import logo from './logo.svg';
import './App.css';
import CouterExample from './CounterExample';
import UseStateBasicExample from './UseStateBasicExample';
import ArrayStateVariable from './ArrayStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
function App() {
  return (
    <div className="App">
      <h3>React useState Examples</h3>
      {/* <CouterExample></CouterExample> */}
      {/* <UseStateBasicExample></UseStateBasicExample> */}
      {/* <ArrayStateVariable></ArrayStateVariable> */}
      <ObjectStateVariable></ObjectStateVariable>
    </div>
  );
}

export default App;

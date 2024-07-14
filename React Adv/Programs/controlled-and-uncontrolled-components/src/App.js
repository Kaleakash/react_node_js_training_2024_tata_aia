import logo from './logo.svg';
import './App.css';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';

function App() {
  return (
    <div className="App">
     <ControlledComponent></ControlledComponent>
     <hr/>
     <UnControlledComponent></UnControlledComponent>
    </div>
  );
}

export default App;

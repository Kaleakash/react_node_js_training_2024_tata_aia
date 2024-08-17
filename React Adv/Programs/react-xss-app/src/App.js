import logo from './logo.svg';
import './App.css';
import DataComponent from './DataComponent';
import DataComponentPurify from './DataComponentPurify';

function App() {
  return (
    <div className="App">
    <DataComponent></DataComponent>
    <hr/>
    <DataComponentPurify></DataComponentPurify>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SumOfNumberWithOutUseMemo from './SumOfNumberWithOutUseMemo';
import SumOfNumberWithUseMemo from './SumOfNumberWithUseMemo';

function App() {
  return (
    <div className="App">
     <SumOfNumberWithOutUseMemo></SumOfNumberWithOutUseMemo>
     <hr/>
     <SumOfNumberWithUseMemo></SumOfNumberWithUseMemo>
    </div>
  );
}

export default App;

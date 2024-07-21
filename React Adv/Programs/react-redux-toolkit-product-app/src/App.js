import logo from './logo.svg';
import './App.css';
import DisplayProduct from './components/DisplayProduct';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
     <AddProduct></AddProduct>
     <hr/>
     <DisplayProduct></DisplayProduct>
    </div>
  );
}

export default App;

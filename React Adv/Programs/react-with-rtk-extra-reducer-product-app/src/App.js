import logo from './logo.svg';
import './App.css';
import ProductView from './component/ProductView';
import AddProduct from './component/AddProduct';

function App() {
  return (
    <div className="App">
      <h2>React with Redux toolkit with extraReducer function</h2>
      <AddProduct></AddProduct>
      <hr/>
      <ProductView></ProductView>
    </div>
  );
}

export default App;

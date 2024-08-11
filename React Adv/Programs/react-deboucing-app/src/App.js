import logo from './logo.svg';
import './App.css';
import SearchComponent from './SearchComponent';
import SearchComponentWithDebounce from './SearchComponentWithDebounce';

function App() {
  return (
    <div className="App">
    {/* <SearchComponent></SearchComponent> */}
    <SearchComponentWithDebounce></SearchComponentWithDebounce>
    </div>
  );
}

export default App;

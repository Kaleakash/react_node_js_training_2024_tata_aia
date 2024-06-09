import logo from './logo.svg';
import './App.css';
import FetchApi from './FetchApi';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      {/* <FetchApi></FetchApi> */}
      <Employee city="Bangalore"></Employee>
    </div>
  );
}

export default App;

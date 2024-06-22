import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import IncrementComponent from './IncrementComponent';
import DecrementComponent from './DecrementComponent';

function App() {
  return (
    <div className="App">
      <h2>React with Redux Example!</h2>
      <FirstComponent></FirstComponent>
      <IncrementComponent></IncrementComponent>
      <DecrementComponent></DecrementComponent>
    </div>
  );
}

export default App;

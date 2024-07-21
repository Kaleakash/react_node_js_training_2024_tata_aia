import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ActionComponent from './ActionComponent';
import IncrementComponent from './IncrementComponent';
import DecrementComponent from './DecrementComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <hr/>
      <ActionComponent></ActionComponent>
      <hr/>
      <IncrementComponent></IncrementComponent>
      <hr/>
      <DecrementComponent></DecrementComponent>
    </div>
  );
}

export default App;

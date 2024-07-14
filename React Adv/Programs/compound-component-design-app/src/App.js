import logo from './logo.svg';
import './App.css';
import ToggleProvider from './ToggleProvider';
import Toggle from './Toggle';
import ToggleConsumer from './ToggleConsumer';

function App() {
  return (
    <div className="App">
      <h2>Compound Component Design pattern!</h2>
      <ToggleProvider>
         <Toggle></Toggle>
          <ToggleConsumer>
            <p>Toggle Message is on!</p>
          </ToggleConsumer>
      </ToggleProvider>
    </div>
  );
}

export default App;

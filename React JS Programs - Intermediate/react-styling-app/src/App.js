import logo from './logo.svg';
import './App.css';
import InlineCssComponent from './InlineCssComponent';
import ExternalCssComponent from './ExternalCssComponent';

function App() {
  return (
    <div className="App">
      {/* <InlineCssComponent></InlineCssComponent> */}
      <ExternalCssComponent></ExternalCssComponent>
    </div>
  );
}

export default App;

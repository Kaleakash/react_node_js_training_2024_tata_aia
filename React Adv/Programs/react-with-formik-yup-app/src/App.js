import logo from './logo.svg';
import './App.css';
import BasicFormikForm from './BasicFormikForm';
import BasicFormikFormWithYup from './BasicFormikFormWithYup';

function App() {
  return (
    <div className="App">
     {/* <BasicFormikForm></BasicFormikForm> */}
     <BasicFormikFormWithYup></BasicFormikFormWithYup>
    </div>
  );
}

export default App;

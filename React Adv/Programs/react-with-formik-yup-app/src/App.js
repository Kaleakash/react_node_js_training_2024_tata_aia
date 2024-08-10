import logo from './logo.svg';
import './App.css';
import BasicFormikForm from './BasicFormikForm';
import BasicFormikFormWithYup from './BasicFormikFormWithYup';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
     {/* <BasicFormikForm></BasicFormikForm> */}
     {/* <BasicFormikFormWithYup></BasicFormikFormWithYup> */}
     <Employee></Employee>
    </div>
  );
}

export default App;

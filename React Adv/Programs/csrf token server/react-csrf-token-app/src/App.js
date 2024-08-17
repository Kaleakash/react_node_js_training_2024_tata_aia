import logo from './logo.svg';
import './App.css';
import useCsrfToken from './useCsrfToken';

function App() {
  let csrfToken= useCsrfToken();
  console.log(csrfToken)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

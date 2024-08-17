import logo from './logo.svg';
import './App.css';
import useCsrfToken from './useCsrfToken';
import LoginWithoutToken from './LoginWithoutToken';

function App() {
  // let csrfToken= useCsrfToken();
  // console.log(csrfToken)
  return (
    <div className="App">
      <LoginWithoutToken></LoginWithoutToken>
    </div>
  );
}

export default App;

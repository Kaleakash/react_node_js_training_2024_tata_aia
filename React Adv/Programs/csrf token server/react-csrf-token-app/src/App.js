import logo from './logo.svg';
import './App.css';
import useCsrfToken from './useCsrfToken';
import LoginWithoutToken from './LoginWithoutToken';
import LoginWithToken from './LoginWithToken';

function App() {
  // let csrfToken= useCsrfToken();
  // console.log(csrfToken)
  return (
    <div className="App">
      <LoginWithoutToken></LoginWithoutToken>
      <hr/>
      <LoginWithToken></LoginWithToken>
    </div>
  );
}

export default App;

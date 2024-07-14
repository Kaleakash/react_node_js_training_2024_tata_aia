import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthContext';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/logout' element={<Logout/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

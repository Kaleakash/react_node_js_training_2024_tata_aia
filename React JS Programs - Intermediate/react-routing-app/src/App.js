import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import { Feedback } from './Feedback';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
     <h2>React Router Example!</h2>
    <div style={{border:"0px red solid"}}>
    <Link to="/">Login Page</Link> |
    <Link to="/aboutus">About Us</Link> |
    <Link to="/contactus">Contact Us</Link> |
    <Link to="/feedback">Feedback</Link> 
    </div>
    <hr/>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/home' element={<Dashboard/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

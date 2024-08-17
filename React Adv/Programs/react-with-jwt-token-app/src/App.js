
import './App.css';
import { adminInfo, getRole, login, register, userInfo } from './services/auth_service';

async function callEndPoint() {
  //let register_result = await register("admin","admin123","admin");
  //console.log(register_result)

  // let admin_login_result = await login("admin","admin123");
  // console.log(admin_login_result)
  // let user_info_result = await userInfo();
  // let admin_info_result = await adminInfo();
  // console.log(user_info_result)
  // console.log(admin_info_result)


  let register_result = await register("user1","user123","user");
  console.log(register_result)

  let user_login_result = await login("user1","user123");
  console.log(user_login_result)
  let user_info_result = await userInfo();
  let admin_info_result = await adminInfo();
  console.log(user_info_result)
  console.log(admin_info_result)

}
function App() {
  callEndPoint();  
  return (
    <div className="App">
      <h2>React Application using JWT Token</h2>
    </div>
  );
}

export default App;

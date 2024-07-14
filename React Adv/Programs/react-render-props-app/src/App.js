import logo from './logo.svg';
import './App.css';
import SimpleComponent from './SimpleComponent';
import MouseTracker from './MouseTracker';
import Info from './Info';

function App() {
  return (
    <div className="App">
     
     <SimpleComponent render={(data)=>
    
      <p>Value is {data}</p>
     
    }></SimpleComponent>

    <MouseTracker render={(position)=> 
    <div>
      Mouse Position x= {position.x} and y = {position.y}
    </div>

    }></MouseTracker>

    <hr/>

    <Info></Info>
    </div>
  );
}

export default App;

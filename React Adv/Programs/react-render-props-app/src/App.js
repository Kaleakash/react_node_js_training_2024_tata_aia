import logo from './logo.svg';
import './App.css';
import SimpleComponent from './SimpleComponent';
import MouseTracker from './MouseTracker';
import Info from './Info';
import DataFetch from './DataFecher';

function App() {
  return (
    <div className="App">
     
     {/* <SimpleComponent render={(data)=>
    
      <p>Value is {data}</p>
     
    }></SimpleComponent>

    <MouseTracker render1={(position)=> 
    <div>
      Mouse Position x= {position.x} and y = {position.y}
    </div>

    }></MouseTracker>

    <hr/>

    <Info></Info> */}
    <DataFetch render={({data,loading,error})=>
      {
            if(loading){
              return <h2>loading......</h2>
            }
            if(error){
              return <h2>Error {error}</h2>
            }
            return(
              <div>
                <ul>
                  {data.map((p,index)=>
                    <li key={index}>
                        <img src={p.image} width="100px" height="100px"/>
                        <span>{p.title}: {p.price}</span>
                    </li>
                  )}
                </ul>
              </div>
            )
      }
    }>
    </DataFetch>
    <hr/>
    <DataFetch url="https://jsonplaceholder.typicode.com/todos" render={({data,loading,error})=>
      {
            if(loading){
              return <h2>loading......</h2>
            }
            if(error){
              return <h2>Error {error}</h2>
            }
            return(
              <div>
                <ul>
                  {data.map((t,index)=>
                    <li key={index}>
                        <span>{t.id} ) {t.title} {t.completed?"True Result ":"False Result"}</span>
                    </li>
                  )}
                </ul>
              </div>
            )
      }
    }>
    </DataFetch>

    </div>
  );
}

export default App;

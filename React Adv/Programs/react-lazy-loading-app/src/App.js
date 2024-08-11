import logo from './logo.svg';
import './App.css';
import ImageComponent from './ImageComponent';
import ImageLazyLoadComponent from './ImageLazyLoadComponent';
//import LazyComponent from './LazyComponent';
import { lazy, Suspense, useEffect, useState } from 'react';

const MyLazyComponent = lazy(()=>import("./LazyComponent"))

function App() {
  let [loadingState,setLoadingState]=useState("initial");
  useEffect(()=> {
    const timer = setTimeout(()=> {
        setLoadingState("preparing")
    },4000)

    return ()=>clearInterval(timer);
  },[])
  const getFallbackStatus = ()=> {
    if(loadingState=="initial"){
      return <div>Plz wait data is loading</div>
    }else if(loadingState=="preparing"){
      return <div>Loading is taking more time </div>
    }else {
      return <div>Something went wrong</div>
    }
  }
  return (
    <div className="App">
      <h2>Main Component</h2>
      
      {/* <ImageComponent></ImageComponent> */}
      {/* <ImageLazyLoadComponent></ImageLazyLoadComponent> */}
      {/* <LazyComponent></LazyComponent> */}
      <Suspense fallback={getFallbackStatus()}>
        <MyLazyComponent/>
      </Suspense>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ImageComponent from './ImageComponent';
import ImageLazyLoadComponent from './ImageLazyLoadComponent';
//import LazyComponent from './LazyComponent';
import { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(()=>import("./LazyComponent"))

function App() {
  return (
    <div className="App">
      <h2>Main Component</h2>
      
      {/* <ImageComponent></ImageComponent> */}
      {/* <ImageLazyLoadComponent></ImageLazyLoadComponent> */}
      {/* <LazyComponent></LazyComponent> */}
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent/>
      </Suspense>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ImageComponent from './ImageComponent';
import ImageLazyLoadComponent from './ImageLazyLoadComponent';

function App() {
  return (
    <div className="App">
      {/* <ImageComponent></ImageComponent> */}
      <ImageLazyLoadComponent></ImageLazyLoadComponent>
    </div>
  );
}

export default App;

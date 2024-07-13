// import logo from './logo.svg';
// import './App.css';
// function Greeting() {
// // coding 
//   //return <h2>Greeting Component</h2>
//   //return <div><h2>Greeting Component</h2></div>
//   // return(
//   //   <div>
//   //     <h1>First heading</h1>
//   //     <h2>second heading</h2>
//   //   </div>
//   // )
//   // return(
//   //   <section>
//   //     <h1>First heading</h1>
//   //     <h2>second heading</h2>
//   //   </section>
//   // )
//   return(
//     <>
//       <h1>First heading</h1>
//       <h2>second heading</h2>
//     </>
//   )
// }

// function Hello() {
//   console.log("Hello function")
// }
// function App() {
  
//   return (
//     <div>
//       <h2>App Component</h2>
//       <Greeting></Greeting>  
//     </div>
    
//   );
// }

function Header() {
  return(
    <header>
      <h2>Header Component</h2>
    </header>
  )
}
function Footer() {
  return(
    <footer>
      <h2>Footer Component</h2>
    </footer>
  )
}

// function Book() {
// const title = <h2>This is Book Title</h2>   //JSX 

//   return(
//     <div>
//       <p>{title}</p>
//       <p>{10+40}</p>
//       <p>{title}</p>
//     </div>
//   )
// }
// static value 
// function Book(props) {
//   console.log(props)
//   let author = "Stephen King";
//   let title = "You Like It Darker";
//   let image = "https://m.media-amazon.com/images/I/A1Yaw51WZRL._SY522_.jpg";
//   return(
//     <>
//       <h3>{title}</h3>
//       <img src={image}/>
//       <p>{author}</p>
//     </>
//   ) 
// }

// store book info in objects using literal style 
// const firstBook ={
//   title:"You Like It Darker",
//   author:"Stephen King",
//   image:"https://m.media-amazon.com/images/I/A1Yaw51WZRL._SY522_.jpg"
//}

// }
// const secondBook ={
//   title:"The Black Orphan",
//   author:"S Hussain Zaidi",
//   image:"https://m.media-amazon.com/images/I/81w7a13pbnL._SY522_.jpg"
// }

// object array 
const books = [
      {
      title:"You Like It Darker",
      author:"Stephen King",
      image:"https://m.media-amazon.com/images/I/A1Yaw51WZRL._SY522_.jpg"
    },  
      {
      title:"The Black Orphan",
      author:"S Hussain Zaidi",
      image:"https://m.media-amazon.com/images/I/81w7a13pbnL._SY522_.jpg"
      },{
        title:"How to be Happy",
        author:"Ruskin Bond",
        image:"https://m.media-amazon.com/images/I/71FSf6i6yvL._SY522_.jpg"
      },{
        title:"The Hill of Enchantment: The Story of My Life as a Writer",
        author:"Ruskin Bond",
        image:"https://m.media-amazon.com/images/I/713Ztse7QkL._SY522_.jpg"
      }
]

function NamesInfo() {
  let name = "Akash";
  let names = ["Ravi","Raju","Ajay","Vijay","Ravi"]
  let nameData = names.map((n,index)=><li key={index}>Index {index } and value is {n}</li>);
  return(
    <>
      <p>{name}</p>
      <p>{names}</p>
      <ul>
        <p>{nameData}</p>
      </ul>
      <hr/>
      <ol>
        <p>{names.map((n,index)=><li key={index}>Index is {index} and value {n}</li>)}</p>
      </ol>
    </>
  )
}
// value or dynamic recieving through props.
function Book(props) {
  //console.log(props)  // props in object form 
  return(
    <>
      <h3>{props.title}</h3>
      <img src={props.image}/>
      <p>{props.author}</p>
    </>
  ) 
}
function Main() {
  return(
    <section>
      <h2>Main Component</h2>
      {/* <NamesInfo></NamesInfo>     */}
{books.map((book,index)=><Book title={book.title} author={book.author} image={book.image} key={index}></Book>)}
    </section>
  )
}


function App() {
  return(
    <>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </>
  )
}

export default App;




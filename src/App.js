import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';


function App() {
  return (
    <>
    
<Navbar title ={`Text Hub`}/>


<div className="container my-5">
<Textform heading = "Type Your Text : " />

</div>

    
</>
    
  
  );
}

export default App;

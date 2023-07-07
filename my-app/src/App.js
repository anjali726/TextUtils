import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert = (message,type) =>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setalert(null);
      },1500);
  }
  const togglemode = ()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled","Success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","Success");
    }
  }
  

  return (
   
    <>
     <BrowserRouter>
    <Navbar title="MyApp" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}></Alert>
 
    <div className="container my-5">
   
	  <Routes>
		<Route exact path="/about" element={<About />}></Route> 
    <Route path="/" element={<Textarea text="Enter your Text Here!"  what="Convert To Uppercase" lol="Convert To Lowercase"/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>

  );
  

}

export default App;

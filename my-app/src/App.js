import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';


function App() {
  return (

   
    <>
    <Navbar title="MyApp" />
    <div className="container my-5">
    <Textarea text="Enter your Text Here!"  what="Convert To Uppercase" lol="Convert To Lowercase"/>
    </div>
    </>

  );
}

export default App;

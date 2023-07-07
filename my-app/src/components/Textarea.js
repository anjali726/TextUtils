import React,{useState} from 'react'

export default function Textarea(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    console.log("LowerCase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleSClick = ()=>{
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("Textarea1").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const countWords = (str) => {
    let words;
    if (text === "") {

      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };
  const [text, setText] = useState('Enter your text here');
  return ( 
    <div>
      <div className="form-group">
      <label htmlFor="Textarea1" value="enter your text here"><h1>{props.text}</h1></label>
      <textarea className="form-control" id="Textarea1" value={text} style={{backgroundColor: props.mode==='dark' ?'grey' :'white'}} rows="10" onChange={handleOnChange}></textarea>
      <button type="button" className="btn btn-dark mx-1 my-2" onClick={handleUpClick}>{props.what}</button>
      <button type="button" className="btn btn-dark mx-1 my-2" onClick={handleLoClick}>{props.lol}</button>
      <button type="button" className="btn btn-dark mx-1 my-2" onClick={handleSClick}>Speak</button>
      </div>
      <div className='container my-5'>
        <h1>Your Text Summary</h1>
        <p>Words: {countWords(text)} Characters: {text.length}</p>
        <p>Total Reading Time: {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
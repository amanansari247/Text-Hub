import React,{useState} from 'react'
import Logo from '../components/logo.jpg';

export default function Textform(props) {
    const handleUpclick = ()=>{

  let newtext = text.toUpperCase();
   setText(newtext);
    }
  
    const cleartext =() =>{
        let newText = '';
        setText(newText);
    }
    const capitalize = () => {
        const cap = text.split(" ");
        let ss = "";
    
        cap.forEach((element) => {
          ss +=
            element.replace(
              element.charAt(0),
              element.charAt(0).toUpperCase()
            ) + " ";
            setText(ss);
        });
      };
      const handleReverseString = () => {
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        setText(newText);
    }
    function handleDuplicates(){
        let wordArr = text.split(" ");
        let newText = wordArr.filter((item, pos)=>{
            return wordArr.indexOf(item) === pos;
        })
        newText = newText.join(" ");
        setText(newText);
}
    const handleLowclick = ()=>{

        let newtext = text.toLowerCase();
         setText(newtext);
          }
    const handleOnchange = (event)=>{
      
      setText(event.target.value);
    }
    const copytext = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const[text, setText] = useState('');
  return (
      <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
  <label forhtml="mybox" className ="form-label"></label>
  <textarea className="form-control" id="mybox"  onChange = {handleOnchange} value = {text} rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-3 my-3"  onClick = {handleUpclick}>UpperCase</button>
 <button className="btn btn-primary mx-3 my-3"  onClick = {handleLowclick}>LowerCase</button>
 <button className="btn btn-primary mx-3 my-3"  onClick = {capitalize}>Capitalize Letters</button>
 <button className="btn btn-primary mx-3 my-3"  onClick = {handleReverseString}>Reverse</button>
 <button className="btn btn-primary mx-3 my-3"  onClick = {handleDuplicates}>Remove Duplicates</button>
 <button className="btn btn-primary mx-3 my-3"  onClick = {copytext}>Copy Text</button>
 <button className="btn btn-primary mx-3 my-3"  onClick = {cleartext}>Clear</button>

    </div>
    <div className="container my-4" >
        <h1>Your Summary</h1>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} Words And {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} ⌚Minutes To Read ⌚</p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>
    
    <div className="container " style={{backgroundColor : "black",color : "white"}} >
        <p className='text-center' >Created with 💖 By Aman</p>
        <img src={Logo}   style ={{marginLeft:"35vw",width: "20vw"}}  alt="" />

    </div>
    </>
  )
}

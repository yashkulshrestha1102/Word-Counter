import React ,{useState} from 'react'


export default function  TextForm(props) { 


  const handleUpClick =()=>{
  let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" converted to UpperCase","success");
  } 
 
  
  
  const handleLoClick =()=>{
    console.log("Lowercase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" converted to LowerCase","success");
  }


  const handleOnChange =(event)=>{
    console.log("on change" );
    setText(event.target.value);
  }    

  const handleCopy =() =>{
    var text = document.getElementById("mybox");
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy Text","success");
  }
   
 const handleClearClick =()=>{
  let newText ='';
  setText(newText);
  props.showAlert(" clear Text","success");
 }


  const handleExtraSpace =()=>{
    let newText =text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Remove Extra spaces","success");
  }

  const [text,setText]=useState("");
  

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}> 
      <h1>{props.heading} </h1>
      <div className="mb-3" >
  <textarea className="form-control"  value={text}placeholder="Leave a comment here"  id="mybox" onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white', color :props.mode==='dark'?'white':'#042743'}} rows="8" ></textarea>
  
    </div> 
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    
    
  
    
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words And {text.length} characters</p>
    <p>{0.008*text.split(" ").length}Minutes read</p> 
    <h3>preview</h3>
    <p>{text.length>0?text:"Enter something  in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}


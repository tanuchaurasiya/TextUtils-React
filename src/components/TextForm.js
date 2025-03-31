import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleUpperCaseClick = ()=>{
    console.log("handleUpperCaseClick called", text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleOnChange = (event)=>{
    console.log("handleOnChange called");
    setText(event.target.value);
  }

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <textarea className="form-control" placeholder="Enter text here.." value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to upperCase</button>
    </div>

    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} chars</p>

    </div>
    </>
  )
}

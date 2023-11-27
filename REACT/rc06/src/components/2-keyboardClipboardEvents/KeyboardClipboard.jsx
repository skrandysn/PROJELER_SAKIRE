import React, { useState } from 'react'

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("")
  const handleKeyDown =(e)=>{
    if(e.keyCode >=48 && e.keyCode <=57){
      e.preventDefault()
      alert("Please don t enter a number")
    }
  }
  return (
    <div className="container text-center">
      <h2>Keyboard-Clipboard Event</h2>
      <input
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputData(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        className="form-control"
        type="text"
      />

      <div className="text-start mt-4">
        <h6>Copied Input Data</h6>
        <p>{inputData.toLowerCase()}</p>
      </div>
      <textarea
        className="form-control"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

export default KeyboardClipboard
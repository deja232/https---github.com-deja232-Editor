import { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './App.css'

const modules = {
  toolbar:[
    [{font:[]}], 
    [{size :[]}],
    ["bold","italic","underline","strike","blockquote"],
    [{ 'align': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '+1' }],
    [{ 'color': [] }, { 'background': [] }],    
    ["link","image"],    

    ],
  };

const App = () => {
  const [value, setValue] = useState("")

  return (
    <>
 <div className ="container">
  <div className="editor">  </div>
    <div className="editable"> </div>
      <ReactQuill
      theme ="snow"
      value={value}
      onChange ={setValue}
      className="input"
      modules={modules}
      />
    </div>
    </>
  )
}

export default App

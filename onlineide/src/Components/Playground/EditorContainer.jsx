import React from 'react'
import CodeEditor from './CodeEditor'
import InputConsole from './InputConsole'
import OutputConsole from './OutputConsole'

function EditorContainer() {
  return (
    <div >
        <div style={{display:'flex', gap:'1vw', padding:'2vh'}}>
          <h2>Playground Name</h2>
          <button style={{backgroundColor:'green', borderRadius:'8px', padding:'1vh', color:'white'}} > Save changes</button>
        </div>

      <div style={{display:'flex'}}>
        <CodeEditor/>
      <div>
         <InputConsole/>
         <OutputConsole />
      </div>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', margin:'2vw'}}>
        <button  style={{backgroundColor:'grey', borderRadius:'8px', padding:'1vh', color:'white'}}>Full screen</button>
        <button  style={{backgroundColor:'blue', borderRadius:'8px', padding:'1vh', color:'white', marginRight:'50%'}}>Run Code</button>
      </div>
      
      
     
    </div>
  )
}

export default EditorContainer
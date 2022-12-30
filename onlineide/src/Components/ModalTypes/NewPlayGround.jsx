import React from 'react'
import { ModalContext } from '../../Context/ModalContext'

import { PlaygroundContext } from '../../Context/PlaygroundContext'


function NewPlayGround() {

const {isOpenModal, closeModal} = React.useContext(ModalContext);
const {addPlayground} = React.useContext(PlaygroundContext);
const {folderId} = isOpenModal.identiifers;
const [playgroundName, setPlayGroundName] = React.useState("");


  return (
    <div>
      <h2>Create New Playground</h2>
      <input type="text" value={playgroundName} onChange={e=>setPlayGroundName(e.target.value)}
      ></input>
      <button onClick={()=>{
        addPlayground(folderId, playgroundName, "javascript")
        closeModal()
      }}>
        Create
      </button>
    </div>
  )
}

export default NewPlayGround
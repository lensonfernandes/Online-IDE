import React from 'react'
import { ModalContext } from '../../Context/ModalContext'

import { PlaygroundContext } from '../../Context/PlaygroundContext'


function NewPlayGround() {

const {isOpenModal, closeModal} = React.useContext(ModalContext);
const {addPlayground} = React.useContext(PlaygroundContext);
const {folderId} = isOpenModal.identifiers;
const [playgroundName, setPlayGroundName] = React.useState("");


  return (
    <div className='px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6'>
      <h2>Create New Playground</h2>
      <input type="text" value={playgroundName} onChange={e=>setPlayGroundName(e.target.value)}
      className='border-[.5px] border-black  p-3 font-semibold w-full rounded-lg shadow-lg'></input>
      <button onClick={()=>{
        addPlayground(folderId, playgroundName, "javascript")
        closeModal()
      }} className='p-4 w-fit text-black bh-white rounded-lg border-[5px] border-darkBlue shadow-lg '>
        Create
      </button>
    </div>
  )
}

export default NewPlayGround
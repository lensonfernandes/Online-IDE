
import React from 'react'
import  {RxCross1}  from 'react-icons/rx'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'

function NewFolder() {

  const { isOpenModal, closeModal } = React.useContext(ModalContext)
const { newFolder, folders, addFolder} = React.useContext(PlaygroundContext);
const {folderId, cardId} = isOpenModal.identifiers;
const [folderTitle, setFolderTitle] = React.useState("")

  return (
    <>
    {            console.log(isOpenModal)
    }            <div className='flex flex-row justify-end p-4'>
                    <RxCross1 size={'1.5em'} onClick={() => closeModal()} />
                </div>
                <div className='px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6'>
                    <h2>Enter Folder Name</h2>
                    <input
                    type="text"
                    value = {folderTitle}
                    onChange={(e) =>  setFolderTitle(e.target.value)}
                    className='border-[.5px] border-black  p-3 font-semibold w-full rounded-lg shadow-lg'
                    />
                    <button 
                    onClick={()=>{
                        addFolder(folderTitle)
                        closeModal()
                    }}
                    className='p-4 w-fit text-black bh-white rounded-lg border-[5px] border-darkBlue shadow-lg '>
                        Proceed
                    </button>
                </div>
            </>
  )
}


export default NewFolder
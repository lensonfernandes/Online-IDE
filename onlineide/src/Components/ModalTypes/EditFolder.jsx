import React , {useContext, useState} from 'react'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'

function EditFolder() {
  const {closeModal, isOpenModal} = useContext(ModalContext);
  const {editFolderTitle, folders} = useContext(PlaygroundContext);

  const folderId = isOpenModal?.identifiers?.folderId;
  const [folderTitle, setFolderTitle] = useState(folders[folderId]?.title);

  return (
    <div className='px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6'>
      <h2>Edit Folder Title</h2>
      <input type="text" value={folderTitle} onChange={e=>setFolderTitle(e.target.value)}  className='border-[.5px] border-black  p-3 font-semibold w-full rounded-lg shadow-lg'></input>
      <button onClick={()=>{
        editFolderTitle(folderId, folderTitle);
        closeModal();
      }} className='p-4 w-fit text-black bh-white rounded-lg border-[5px] border-darkBlue shadow-lg '>Save Chnages</button>
    </div>
  )
}

export default EditFolder
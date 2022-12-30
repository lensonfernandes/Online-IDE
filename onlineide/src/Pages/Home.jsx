import React from 'react'
import LeftPaneHomeScreen from '../Components/Home/LeftPaneHomeScreen'
import RightPaneHomeScreen from '../Components/Home/RightPaneHomeScreen'
import Modal from '../Components/Modal'
import { ModalContext } from '../Context/ModalContext'

function Home() {

  const {isOpenModal} = React.useContext(ModalContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div className=" border-2 border-black">
            <LeftPaneHomeScreen />
        </div>
        <div className="border-2 border-black">
            <RightPaneHomeScreen />
        </div>
        {isOpenModal.show && <Modal />}
    </div>
  )
}

export default Home
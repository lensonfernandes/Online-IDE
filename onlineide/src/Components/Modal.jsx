import React from "react";
import { ModalContext } from "../Context/ModalContext";
import { RxCross1 } from "react-icons/rx";
import {
  NewFolder,
  NewPlayGround,
  NewPlayGroundAndFolder,
  EditFolder,
  EditPlayGroundTitle,
  Loading,
} from "./ModalTypes";

function Modal() {
  const { isOpenModal } = React.useContext(ModalContext);
  const { modalType } = isOpenModal;

  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div
        className="relative w-auto my-6 mx-auto max-w-3l"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-0 rounded-lg relative flex flex-col w-[30rem] bg-white outline-none focus:outline-none">
            {
                modalType === 1 && <NewFolder />
            }
             {
                modalType === 2 && <NewPlayGround />
            }
             {
                modalType === 3 && <NewPlayGroundAndFolder />
            }
             {
                modalType === 4 && <EditFolder />
            }
             {
                modalType === 5 && <EditPlayGroundTitle />
            }
             {
                modalType === 6 && <Loading />
            }

        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-4 bg-black"></div>
    </>
  );
}

export default Modal;

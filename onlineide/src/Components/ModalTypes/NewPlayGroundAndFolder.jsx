import React, { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";

function NewPlayGroundAndFolder() {
  const { closeModal, isOpenModal } = useContext(ModalContext);
  const { addPlaygroundAndFolder, folders } = useContext(PlaygroundContext);
  const [folderTitle, setFolderTitle] = React.useState("");
  const [playgroundTitle, setPlaygroundTitle] = React.useState("");

  return (
    <div className="px-6 py-4  mb-8 flex flex-col items-center justify-center gap-6">
      <h2>Enter New Folder and Playground Name</h2>
      <label>Enter Folder Name</label>
      <input
        type="text"
        value={folderTitle}
        onChange={(e) => setFolderTitle(e.target.value)}
        className="border-[.5px] border-black  p-3 font-semibold w-full rounded-lg shadow-lg"
      ></input>
      <label>Enter Playground Name</label>
      <input
        type="text"
        value={playgroundTitle}
        onChange={(e) => setPlaygroundTitle(e.target.value)}
        className="border-[.5px] border-black  p-3 font-semibold w-full rounded-lg shadow-lg"
      ></input>
      <button
        onClick={() => {
          addPlaygroundAndFolder(folderTitle, playgroundTitle, "javascript");
          closeModal();
        }}
        className="p-4 w-fit text-black bh-white rounded-lg border-[5px] border-darkBlue shadow-lg "
      >
        Create Playground
      </button>
    </div>
  );
}

export default NewPlayGroundAndFolder;

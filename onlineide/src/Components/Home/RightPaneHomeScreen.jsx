import React, { useContext } from "react";
import PlaygroundCard from "./PlaygroundCard";
import { IoTrashOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { FcOpenedFolder } from "react-icons/fc";

import Card from "../Card";
import { ModalContext } from "../../Context/ModalContext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";
import { useNavigate } from "react-router-dom";

function RightPaneHomeScreen() {
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard, setFolders, addFolder } = useContext(PlaygroundContext);

  return (
    <div>
      <div className="flex justify-between m-6 font-mono'">
        <h3 className="font-mono">My Playground</h3>
        <h4
          className="font-mono"
          onClick={() =>
            openModal({
              show: true,
              modalType: 1,
              identifiers: {
                folderId: "",
                cardId: "",
              },
            })
          }
        >
          + New Folder
        </h4>
      </div>
      <hr className="m-4" />

      {Object.entries(folders).map(([folderId, folder]) => (
        <div className="flex-col flex my-8">
          <div className="flex justify-between placeholder:mt-8 items-center">
            <div className="flex gap-4 items-center">
              <FcOpenedFolder size={"2em"} />
              <h5 className="semibold"> {folder.title}</h5>
            </div>
            <div className="flex gap-4 items-center">
              <BiEditAlt
                size={"1.2em"}
                onClick={() =>
                  openModal({
                    show: true,
                    modalType: 4,
                    identifiers: {
                      folderId: folderId,
                      cardId: "",
                    },
                  })
                }
              />
              <IoTrashOutline
                size={"1.2em"}
                onClick={() => deleteFolder(folderId)}
              />
              <h5
                className="semibold"
                onClick={() =>
                  openModal({
                    show: true,
                    modalType: 2,
                    identifiers: {
                      folderId: folderId,
                      cardId: "",
                    },
                  })
                }
              >
                <span className="font-semibold text-2xl">+</span> New Playground
              </h5>
            </div>
          </div>
          <hr className="mb-4 mt-4 bg-black m-4" />
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {folder["playgrounds"] &&
              Object.entries(folder["playgrounds"])?.map(
                ([playgroundId, playground]) => (
                  <Card key={playgroundId}>
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); //stop click propagation from child to parent
                        console.log(folderId, playgroundId);
                        // navigate(`/playground/${folderId}/${playgroundId}`)
                      }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex gap-4 items-center">
                        <img src="/logo-small.png" alt="" />
                        <div>
                          <h6>{playground.title}</h6>
                          <h6>Language: {playground.language}</h6>
                        </div>
                      </div>
                      <div
                        className="flex gap-4 items-center"
                        onClick={(e) => {
                          e.stopPropagation(); //stop click propagation from child to parent
                        }}
                      >
                        <BiEditAlt
                          size={"1.2em"}
                          onClick={() => {
                            console.log("clicked");
                            openModal({
                              show: true,
                              modalType: 5,
                              identifiers: {
                                folderId: folderId,
                                cardId: playgroundId,
                              },
                            });
                          }}
                        />
                        <IoTrashOutline
                          size={"1.2em"}
                          onClick={() => deleteCard(folderId, playgroundId)}
                        />
                      </div>
                    </div>
                  </Card>
                )
              )}
          </div>
        </div>
      ))}

      {/* <div className="flex justify-between m-6">
        <div className="left flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>

          <h4 className="font-mono"> My Folder</h4>
        </div>

        <div className="right flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>

          <h5 className="font-mono">+ New Playground</h5>
        </div>
      </div> */}
      <hr className="m-4" />

      <div className="container-cards flex flex-wrap gap-4 m-4">
        {/* <PlaygroundCard />
        <PlaygroundCard />
        <PlaygroundCard />
        <PlaygroundCard />
        <PlaygroundCard /> */}
      </div>
    </div>
  );
}

export default RightPaneHomeScreen;

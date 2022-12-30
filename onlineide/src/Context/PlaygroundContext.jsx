import { createContext, useState, useEffect } from "react";
import {v4 as uuid} from 'uuid';

export const PlaygroundContext = createContext();

export const languageMap = {
    "cpp": {
        id: 54,
        defaultCode: 
        "#include <iostream>\n"
        + "using namespace std;\n\n"
        + "int main() {\n"
        + '\tcout << "Hello World!";\n'
        + "\treturn 0;\n"
        + "}",
    },
    "java": {
        id: 62,
        defaultCode: `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
    }`,
    },
    "python": {
        id: 71,
        defaultCode: `print("Hello World!")`,
    },
    "javascript": {
        id: 63,
        defaultCode: `console.log("Hello World!");`,
    }
}


function PlaygroundProvider({children}){
    const initialItems = {
        title: "DSA",
        playgrounds: {
            [uuid()]: {
                title: "Arrays",
                language: 'cpp',
                code: languageMap["cpp"].defaultCode,
            },
            [uuid()]:{
                title:"Strings",
                language:"java",
                code:languageMap["java"].defaultCode,
            },
        }
    }


    const [folders, setFolders] = useState(()=>{
        let localData = localStorage.getItem("playgrounds-data");
        if(localData === null || localData === undefined){
            return initialItems;
        }
        return JSON.parse(localData);
    });

    useEffect(()=>{
        localStorage.setItem("playgrounds-data", JSON.stringify(folders))
    }, [folders]);


    const deleteCard = (folderId, cardId) =>{
        setFolders((oldState)=>{
            const newFolders = {...oldState};
            delete newFolders[folderId].playgrounds[cardId];
            return newFolders;
        })
    }

    const deleteFolder = (folderId) =>{
        setFolders((oldState)=>{
            const newFolders = {...oldState};
            delete newFolders[folderId];
            return newFolders;
        })
    }

    const addFolder = (folderName) => {
        setFolders((oldState)=>{
            const newFolders = {...oldState};
            newFolders[uuid()] = {
                title: folderName,
                playgrounds: {},
            }
            return newFolders;
        })
    }

    const addPlayground = (folderId, playgroundName, language) =>{
        setFolders((oldState)=> {
            const newFolders = {...oldState};
            newFolders[folderId].playgrounds[uuid()] = {
                title: playgroundName,
                language: language,
                code: languageMap[language].defaultCode,
            }
            return newFolders;
        })
    }

    const addPlaygroundAndFolder = (folderName, playgroundName, language) => {
        setFolders((oldState)=>{
            const newFolders = {...oldState};
            newFolders[uuid()]= {
                title: folderName,
                playgrounds: {
                    [uuid()]:{
                        title: playgroundName,
                        language:language,
                        code: languageMap[language].defaultCode,
                    }
                }
            }
            return newFolders;
        })
    }

    const editFolderTitle = (folderId, newTitle) => {
        setFolders((oldState)=> {
            const newFolders = {...oldState};
            newFolders[folderId].title = newTitle;
            return newFolders;
        })
    }

    const editPlaygroundTitle = (folderId, playgroundId, newTitle) => {
        setFolders((oldState)=> {
            const newFolders = {...oldState};
            newFolders[folderId].playgrounds[playgroundId].title = newTitle;
            return newFolders;
        })
    }

    const savePlaygroundCode = (folderId, playgroundId, newCode, language) => {
        setFolders((oldState)=>{
            const newFolders = {...oldState};
            newFolders[folderId].playgrounds[playgroundId].code = newCode;
            newFolders[folderId].playgrounds[playgroundId].language = language;
            return newFolders;

        })
    }

    const PlaygroundFeatures = {
        folders : folders,
        deleteFolder : deleteFolder,
        deleteCard : deleteCard,
        addFolder : addFolder,
        addPlayground : addPlayground,
        addPlaygroundAndFolder: addPlaygroundAndFolder,
        editFolderTitle: editFolderTitle,
        editPlaygroundTitle : editPlaygroundTitle,
        savePlaygroundCode : savePlaygroundCode,
    }

    return (
        <PlaygroundContext.Provider value={PlaygroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;
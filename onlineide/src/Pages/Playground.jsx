import React, { useContext, useState } from "react";
import NavBar from "../Components/Playground/NavBar";
import EditorContainer from "../Components/Playground/EditorContainer";
import { useParams } from "react-router";
import { PlaygroundContext, languageMap } from "../Context/PlaygroundContext";
import Modal from "../Components/Modal";
import { Buffer } from "buffer";
import axios, { Axios } from "axios";
import InputConsole from "../Components/Playground/InputConsole";
import OutputConsole from "../Components/Playground/OutputConsole";
import { ModalContext } from "../Context/ModalContext";
import CodeEditor from "../Components/Playground/CodeEditor";

function Playground() {
  const { folderId, playgroundId } = useParams();
  const { folders,  savePlayground } = useContext(PlaygroundContext);
  const { isOpenModal, openModal, closeModal } = useContext(ModalContext);
  const { title, language, code } = folders[folderId].playgrounds[playgroundId];

  const [currentCode, setCurrentCode] = useState(code);
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentInput, setCurrentInput] = useState("");
  const [curentOutput, setCurrentOutput] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const saveCode = () => {
    savePlayground(folderId, playgroundId, currentCode, currentLanguage);
  };

  const encode = (str) => {
    return Buffer.from(str, "binary").toString("base64");
  };

  const decode = (str) => {
    return Buffer.from(str, "base64").toString();
  };

  const postSubmission = async (language_id, source_code, stdin) => {
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "4d51bdb949mshf86800867c9df4bp1e2348jsn4d7d96b905ee",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
      }),
    };
    const res = await axios.request(options)
    return res?.data?.token
    
  }
  const getOutput = async (token) => {
    const options = {
      method: 'GET',
      url: 'https://judge0-ce.p.rapidapi.com/submissions/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Key': '4d51bdb949mshf86800867c9df4bp1e2348jsn4d7d96b905ee',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    }

    const res = await axios.request(options)
    if(res?.data?.status_id <=2){
      const res2 = await getOutput(token)
      return res2.data
    }
    return res?.data


  };
  const runCode = async () => {
    openModal({
      show:true,
      modalType: 6,
      identifiers: {
        folderId: "",
        cardId:""
      }
    })
    const language_id = languageMap[currentLanguage];
    const source_code = encode(currentCode);
    const stdin = encode(currentInput);
    const token = await postSubmission(language_id, source_code, stdin);
    const res = await getOutput(token);
    const status_name = res.status.description;
    const decoded_output = decode(res.stdout? res.stdout : "");
    const decoded_error = decode(res.stderr ?res.stderr:"")
    const decoded_compile_output = decode(res.compile_output ? res.compile_output : "");

    let final_output  = ''
    if(res.status_id !== 3){
      if(decoded_compile_output=""){
        final_output=decoded_output
      }
      else{
        final_output= decoded_compile_output;
      }
    }
    else{
      final_output = decoded_error
    }

    setCurrentOutput(status_name + "\n\n" + final_output)
    closeModal();

  }

  const getFile = (e, setState) => {
    const input = e.target;
    if("files" in input && input.files.length > 0){
      placeFileContent(
        input.files[0].setState
      )
    }
  }

  const placeFileContent = (file, setState) => {
    readFileContent(file).then(content => {
      setState(content)
    }).catch(error => console.log(error))
  }
  const readFileContent = (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject)=>{
      reader.onload = event => resolve(event.target.result);
      reader.onerror = error => reject(error);
      reader.readAsText(file);
    })
  }

  return (<div>
    <p>Hello 1 2 3</p>
    {/* <CodeEditor /> */}
  </div>);
}

export default Playground;

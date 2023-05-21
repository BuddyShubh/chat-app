import React from "react";

import "../css/Chats.css";
import { IoSend } from "react-icons/io5";
import Msg from "./Msg";
export default function Chats() {

  return (
    <div className="body">
      <div className="chat">
        <Msg from="another" msg="hlo"/>
      </div>
      <div className="input">
        <input type="text" onFocus={send} placeholder="Type your message" />
        <IoSend className="icon" />
      </div>
    </div>
  );
}


function send() {
  document.addEventListener("keypress",(e)=>{
      if (e.key === "Enter") {
          const chat = document.getElementsByClassName("chat")
      }
  })
}

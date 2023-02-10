import axios from "axios";

// Setting images
const chatsProfileImg = document.getElementById("chatsProfileImg");
const searchIcon = document.querySelectorAll("#searchIcon");
const readIcon = document.querySelectorAll("#readIcon");
const msgProfileImg = document.getElementById("msgProfileImg");
const emojisBtn = document.getElementById("emojisBtn");
const filesBtn = document.getElementById("filesBtn");
const msgSendBtn = document.getElementById("msgSendBtn");
const closeSideMsg = document.querySelectorAll("#closeSideMsg");
const chatPannel = document.getElementById("chatPannel");
// const chatsImg = document.getElementById("chatsImg");

import chatPannelBg from "../images/chat-bg.jpeg";
import closeIcon from "../images/x.svg";
import profileImg from "../images/profileImg.png";
import search from "../images/search.svg";
import read from "../images/check.svg";
import emojis from "../images/smile.svg";
import paperClip from "../images/paperclip.svg";
import msgSent from "../images/send.svg";
import { getChat } from "./services";

// chatsImg.src = profileImg;
chatPannel.style.backgroundImage = `url(${chatPannelBg})`;
msgSendBtn.src = msgSent;
filesBtn.src = paperClip;
emojisBtn.src = emojis;
msgProfileImg.src = profileImg;
chatsProfileImg.src = profileImg;
for (let i = 0, len = closeSideMsg.length; i < len; i++) {
  closeSideMsg[i].src = closeIcon;
}
for (let i = 0, len = searchIcon.length; i < len; i++) {
  searchIcon[i].src = search;
}
for (let i = 0, len = readIcon.length; i < len; i++) {
  readIcon[i].src = read;
}

// Render chats

const chatList = document.getElementById("chatList");

export const renderUsers = (data) => {
  chatList.innerHTML = "";
  data.forEach((user) => {
    chatList.innerHTML += `
    <li class="chat-list-item">
      <figure class="chat-img">
      </figure>
      <div class="chat__info">
        <div class="chat__info-top">
          <p class="chat__info-top-name">${user.name}</p>
          <p class="chat__info-top-lastMsg">Viernes</p>
        </div>
        <div class="chat__info-bottom">
          <figure class="chat__info-bottom-readIcon">
            <img id="readIcon" alt="" />
            <img id="readIcon" alt="" />
          </figure>
          <p class="chat__info-bottom-last">Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </li>
    `;
  });
};

// Big chat

export const renderMsgs = async () => {
  chatPannel.innerHTML = "";
  const msgs = await getChat();
  msgs.forEach((msg) => {
    chatPannel.innerHTML += `
    <p class="message" >
      ${msg.message}
    </p>
  `;
  });
};

renderMsgs();

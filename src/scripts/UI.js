// Setting images
const chatsProfileImg = document.getElementById("chatsProfileImg");
const searchIcon = document.querySelectorAll("#searchIcon");
const chatsImg = document.getElementById("chatsImg");
const readIcon = document.querySelectorAll("#readIcon");
const msgProfileImg = document.getElementById("msgProfileImg");
const emojisBtn = document.getElementById("emojisBtn");
const filesBtn = document.getElementById("filesBtn");
const msgSendBtn = document.getElementById("msgSendBtn");
const chatBg = document.getElementById("chatBg");

import chatPannelBg from '../images/chat-bg.jpeg'
import profileImg from "../images/profileImg.png";
import search from "../images/search.svg";
import read from "../images/check.svg";
import emojis from "../images/smile.svg";
import paperClip from "../images/paperclip.svg";
import msgSent from "../images/send.svg";

chatBg.src = chatPannelBg
msgSendBtn.src = msgSent;
filesBtn.src = paperClip;
emojisBtn.src = emojis;
msgProfileImg.src = profileImg;
chatsImg.src = profileImg;
chatsProfileImg.src = profileImg;
for (let i = 0, len = searchIcon.length; i < len; i++) {
  searchIcon[i].src = search;
}
for (let i = 0, len = readIcon.length; i < len; i++) {
  readIcon[i].src = read;
}

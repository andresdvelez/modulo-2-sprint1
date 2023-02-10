import { sendMsg } from "./services";
import { renderMsgs } from "./UI";

const msgInput = document.getElementById("msgInput");
const msgSendBtn = document.getElementById("msgSendBtn");
const msgForm = document.getElementById("msgForm");

msgForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newMsg = { message: msgInput.value };

  sendMsg(newMsg);

  await renderMsgs();
});

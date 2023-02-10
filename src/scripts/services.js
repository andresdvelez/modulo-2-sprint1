import axios from "axios";

const USERS_URL = "https://miniback-sprint1-production.up.railway.app/users";
const URL_CHAT = "https://miniback-sprint1-production.up.railway.app/chat";

export const getUsers = async () => {
  const res = await axios.get(USERS_URL);

  return res.data;
};

export const addUser = async (data) => {
  try {
    await axios.post(USERS_URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const getChat = async () => {
  try {
    const getChat = await axios.get(URL_CHAT);
    return getChat.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendMsg = async (msg) => {
  try {
    await axios.post(URL_CHAT, msg);
  } catch (error) {
    console.log(error);
  }
};

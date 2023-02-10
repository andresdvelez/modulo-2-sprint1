import { addUser, getUsers } from "./services";
import { renderUsers } from "./UI";

const sideForm = document.getElementById("sideForm");
const overlayForm = document.getElementById("overlayForm");
const inputName = document.getElementById("inputName");
const inputPhone = document.getElementById("inputPhone");

window.addEventListener("DOMContentLoaded", () => {
  sideForm.classList.add("active");
  overlayForm.classList.add("active");
});

sideForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  sideForm.classList.remove("active");
  overlayForm.classList.remove("active");

  const newUser = {
    name: inputName.value,
    phone: inputPhone.value,
  };

  await addUser(newUser);

  const users = await getUsers();

  renderUsers(users);
});

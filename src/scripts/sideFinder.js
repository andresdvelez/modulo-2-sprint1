const msgSearchBtn = document.getElementById("msgSearchBtn");
const sideFinder = document.getElementById("sideFinder");
const closeSideMsg = document.getElementById("closeSideMsg");

msgSearchBtn.addEventListener("click", () => {
  sideFinder.classList.add("active");
});

closeSideMsg.addEventListener("click", () => {
  sideFinder.classList.remove("active");
});

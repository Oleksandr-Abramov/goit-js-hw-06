function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};

refs.btn.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.color.textContent = color;
}

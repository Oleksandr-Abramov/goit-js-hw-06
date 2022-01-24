const refs = {
  input: document.querySelector("#validation-input"),
  dataLength: document.querySelector("#validation-input").getAttribute("data-length"),
};
refs.input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(refs.dataLength)) {
    changeClass("invalid", "valid");
  } else {
    changeClass("valid", "invalid");
  }
}
function changeClass(removeClass, addClass) {
  refs.input.classList.remove(removeClass);
  refs.input.classList.add(addClass);
}

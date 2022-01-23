const refs = {
  input: document.querySelector("#validation-input"),
  dataLength: document.querySelector("#validation-input").getAttribute("data-length"),
};
refs.input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(refs.dataLength)) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}

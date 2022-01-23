const refs = {
  input: document.querySelector("#font-size-control"),
  value: document.querySelector("#text"),
};
refs.input.addEventListener("change", () => (refs.value.style.fontSize = `${refs.input.value}px`));

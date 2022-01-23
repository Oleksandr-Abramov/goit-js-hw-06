const refs = {
  inpit: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.inpit.addEventListener("input", (event) => (refs.output.textContent = event.currentTarget.value));

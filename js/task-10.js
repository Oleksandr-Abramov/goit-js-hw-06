const refs = {
  create: document.querySelector("[data-create]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  destroy: document.querySelector("[data-destroy]"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let size = 30;
  const arrElems = [];

  for (let i = 0; i < amount; i += 1) {
    // createElem(size, getRandomHexColor());
    const el = document.createElement("div");
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    arrElems.push(el);
    size += 10;
  }
  destroyBoxes();
  refs.boxes.append(...arrElems);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

refs.create.addEventListener("click", () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.destroy.addEventListener("click", destroyBoxes);

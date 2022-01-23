const value = document.querySelector("#value");
let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});

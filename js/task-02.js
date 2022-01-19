const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const list = document.querySelector("#ingredients");
let items = [];

for (const el of ingredients) {
  const item = document.createElement("li");
  item.textContent = el;
  list.classList.add("item");
  items.push(item);
}
list.append(...items);

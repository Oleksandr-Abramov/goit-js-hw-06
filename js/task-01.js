const body = document.querySelector("#categories");
console.log("Number of categories", body.children.length);
for (const el of body.children) {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
}

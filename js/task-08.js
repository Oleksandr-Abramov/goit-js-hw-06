const refs = {
  form: document.querySelector(".login-form"),
};
refs.form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;
  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
}

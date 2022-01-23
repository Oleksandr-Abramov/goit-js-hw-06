const refs = {
  form: document.querySelector(".login-form"),
};
refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }
  const formData = {};
  const getMailst = event.currentTarget.elements.email.value;
  const getPassword = event.currentTarget.elements.password.value;
  formData.email = getMailst;
  formData.password = getPassword;
  console.log(formData);
  event.currentTarget.reset();
}

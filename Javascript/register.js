const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("passwordConfirm");
const submit = document.getElementsByClassName("btn")[0];
const list = document.getElementsByTagName("ul")[0];
var userAlert = document.querySelector(".userAlert");
var emailAlert = document.querySelector(".emailAlert");

function checkPasswordPolicy(){
  if (password.value !== password2.value){
    return false
  } else if (username.value === "" && email.value !== "" && password.value !== "" && password2.value !== ""){
    userAlert.classList.remove("d-none");
  } else if (username.value !== "" && email.value === "" && password.value !== "" && password2.value !== ""){
    emailAlert.classList.remove("d-none");
  }
  const checks = [
    {
      isValid: password.value.length >= 8,
      element: list.children[0],
    },
    {
      isValid: /[A-Z]/.test(password.value),
      element: list.children[1],
    },
    {
      isValid: /[a-z]/.test(password.value),
      element: list.children[2],
    },
    {
      isValid: /[0-9]/.test(password.value),
      element: list.children[3],
    },
    {
      isValid: /[!@#\$%\^&\*]/.test(password.value),
      element: list.children[4],
    },
  ];
  for (const check of checks) {
    if (!check.isValid) {
      check.element.style.color = "red";
      return false;
    } else {
      check.element.style.color = "green";
    }
  }
  return true;
}

submit.addEventListener("click", function (e) {
  if (!checkPasswordPolicy()) {
    e.preventDefault();
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  } }
)
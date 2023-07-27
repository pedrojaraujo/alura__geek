const emailValue = document.querySelector(".input__email__login");
const passwordValue = document.querySelector(".input__password__login");
const loginButton = document.querySelector(".btn.blue__btn.login__btn");
const formLogin = document.querySelector(".form__input");

const loginApprove = (e) => {
  e.preventDefault();

  if (previousMessage) {
    previousMessage.remove();
  }

  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z0-9]+$/;

  const passwordRegex = /^.{8,}$/;

  if (
    emailRegex.test(emailValue.value) &&
    passwordRegex.test(passwordValue.value)
  ) {
    window.location.href = "../pages/home.html";
  } else {
    const errorPara = document.createElement("p");
    errorPara.textContent = "Email ou senha incorretos";
    errorPara.classList.add("mensagemDeErro");
    formLogin.insertBefore(errorPara, loginButton);
    previousMessage = errorPara;
  }
};

loginButton.addEventListener("click", (e) => {
  loginApprove(e);
});

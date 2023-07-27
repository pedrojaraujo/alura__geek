const name = document.getElementById("namePerson");
const message = document.getElementById("messageFromPerson");
const messageButton = document.getElementById("btn__message");
const form = document.getElementsByClassName("contact__container")[0];

let previousMessage;

const resetFormFields = () => {
  name.value = "";
  message.value = "";
};

const sucessMessage = (e) => {
  e.preventDefault();

  if (previousMessage) {
    previousMessage.remove();
  }

  if (name.value.length !== 0 && message.value.length !== 0) {
    const successPara = document.createElement("p");
    successPara.textContent = "Mensagem enviada com sucesso!";
    successPara.classList.add("mensagemDeSucesso");
    messageButton.replaceWith(successPara);
    previousMessage = successPara;
    resetFormFields();
  } else {
    const errorPara = document.createElement("p");
    errorPara.textContent = "Ocorreu erro de preenchimento do formulário.";
    errorPara.classList.add("mensagemDeErro");
    form.insertBefore(errorPara, messageButton);
    previousMessage = errorPara;
  }
};

messageButton.addEventListener("click", (e) => {
  sucessMessage(e);
});

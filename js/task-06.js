const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const dataLength = Number(validationInput.getAttribute("data-length"));

  if (inputValue.length === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
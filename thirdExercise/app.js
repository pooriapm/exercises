const textInput = document.getElementById("textInput");
const hint = document.getElementById("hint");

let typeTime;
textInput.addEventListener("input", () => {
  clearTimeout(typeTime);
  typeTime = setTimeout(doneTyping, 500);
});
function doneTyping() {
  const inputValue = textInput.value;
  const inputLength = inputValue.length;
  hint.innerText = `text length: ${inputLength} character`;

  if (inputLength > 30) {
    hint.classList.add("error");
    textInput.classList.add("error");
  } else {
    hint.classList.remove("error");
    textInput.classList.remove("error");
  }
}

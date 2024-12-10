const textInput = document.getElementById("textInput");

let typeTime;
textInput.addEventListener("input", () => {
  clearTimeout(typeTime);
  typeTime = setTimeout(doneTyping, 500);
});
function doneTyping() {
  const inputValue = textInput.value;
  const inputLength = inputValue.length;
  alert(`your text is: ${inputValue}\n length: ${inputLength} characters`);
}

const inputs = document.querySelector("input");
const buttonEl = document.querySelector("button");
const error = document.querySelector(".error");
buttonEl.addEventListener("click", clicked);
function clicked() {
  if (inputs.validity.valid) {
    inputs.value = "";
    inputs.classList.remove("addInput");
    document.querySelector(".js-display").innerHTML = "";
  } else {
    document.querySelector(".js-display").innerHTML =
      "Please provide a valid email!";
    // const errorImg = document.createElement("img");
    // errorImg.src = "./images/icon-error.svg";
    inputs.classList.add("addInput");
    error.style.display = "inline-block";
  }
}
/// When you click Enter
inputs.addEventListener("keydown", keyClick);
function keyClick(event) {
  if (event.key === "Enter") {
    clicked();
  }
}

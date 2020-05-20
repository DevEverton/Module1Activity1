window.addEventListener("load", start);

function start() {
  getSlidersValues();
}

function getSlidersValues() {
  let sliderRed = document.querySelector("#slider-red");
  let sliderGreen = document.querySelector("#slider-green");
  let sliderBlue = document.querySelector("#slider-blue");
  sliderRed.addEventListener("input", slidersValueChange);
  sliderGreen.addEventListener("input", slidersValueChange);
  sliderBlue.addEventListener("input", slidersValueChange);
}

function slidersValueChange(event) {
  changeTextInputValue(event.target.id, event.target.value);
}

function changeTextInputValue(slider, value) {
  let inputRed = document.querySelector("#inputRed");
  let inputGreen = document.querySelector("#inputGreen");
  let inputBlue = document.querySelector("#inputBlue");
  if (slider === "slider-red") {
    inputRed.value = value;
  } else if (slider === "slider-green") {
    inputGreen.value = value;
  } else if ((slider = "slider-blue")) {
    inputBlue.value = value;
  }
  renderRGB(inputRed.value, inputGreen.value, inputBlue.value);
}

function renderRGB(r, g, b) {
  let divBox = document.querySelector("#box");
  divBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

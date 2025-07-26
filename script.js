const input = document.querySelectorAll(".input");
const values = document.querySelector("#values");
const equalTo = document.querySelector("#equalTo");
const CLR = document.querySelector("#CLR");
const DEL = document.querySelector("#DEL");

// Show the value in Display.
let display = "";

// Input the values in Display.
input.forEach((input) => {
  input.addEventListener("click", () => {
    display += input.innerText;
    if (input.innerText == "x") {
      display.replace("x", "*");
    }
    values.value = display;
  });
});

// For Calculation.
equalTo.addEventListener("click", () => {
  try {
    values.value = eval(display);
    display = "";
  } catch {
    alert("Something want wrong, Please enter valid inputs.");
  }
});

// Clear entier values of Display
CLR.addEventListener("click", () => {
  try {
    values.value = display = "";
  } catch {
    alert("Something want wrong, Please enter valid inputs.");
  }
});

// Delete last input data.
DEL.addEventListener("click", () => {
  try {
    values.value = display = display.slice(0, -1);
  } catch {
    alert("Something want wrong, Please enter valid inputs.");
  }
});

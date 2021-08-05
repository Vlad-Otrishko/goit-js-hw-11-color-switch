import colors from "./data.js";
console.log(colors);


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startButtonRef = document.querySelector('[data-action="start"]');
const stopButtonRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector("body");
let intervalId = null;

startButtonRef.addEventListener("click", onStart);
stopButtonRef.addEventListener("click", onStop);
function onStart() {
  startButtonRef.setAttribute("disabled", "true");
  intervalId = setInterval(() => {
    bodyRef.setAttribute(
      "style",
      `background-color:${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      };`
    );
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  startButtonRef.removeAttribute("disabled");
}

let counterValue = 0;
const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecr = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncr = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decr.addEventListener("click", countDecr);
incr.addEventListener("click", countIncr);


const decrimentBtnRef = document.querySelector("[data-action='decrement']");
const inrementBtnRef = document.querySelector("[data-action='increment']");

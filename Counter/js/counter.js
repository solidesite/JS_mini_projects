const up = document.querySelector(".btn_up")
const down = document.querySelector(".btn_down")
const reset = document.querySelector(".btn_reset")
const counter = document.querySelector(".counter")
let num = 0;

up.addEventListener("click", () => {
  num++;
  counter.innerText = num;
})
down.addEventListener("click", () => {
  if (num > 0) {
    num--;
    counter.innerText = num;
  }
})
reset.addEventListener("click", () => {
  num = 0;
  counter.innerText = num;
})
box.addEventListener("click", () => {
  box.classList.add("red")
})
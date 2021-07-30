const up = document.querySelector(".btn_up")
const down = document.querySelector(".btn_down")
const reset = document.querySelector(".btn_reset")
const counter = document.querySelector(".counter")
const box = document.querySelector(".box")

// const counting = 1;
// const counting2 = String(counting);
// const counting = function () {
//   const num = 0;
//   num++;
// };
// const number = 1;

let num = 0;
// up.innerText === counting.innerText;
up.addEventListener("click", () => {
  num++;
  counter.innerText = num;
})
down.addEventListener("click", () => {
  
})
box.addEventListener("click", () => {
  box.classList.add("red")
})
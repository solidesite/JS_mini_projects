const canvas = document.getElementById("canvas");
let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
}

//클릭 시
function onMouseDown(event) {
  painting = ture;
}

function onMouseUp(event) {
  stopPainting();
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", stopPainting);
var lienzo1 = document.getElementById("lienzo");
var papel1 = lienzo1.getContext("2d");
var lienzo2 = document.getElementById("canvas2");
var papel2 = lienzo2.getContext("2d");
var imagen1 = new Image();

var pos_x = 0;
var pos_y = 0;

imagen1.src =
  "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt48d901bbccf0e311/61cdfe8b19a3a258fa5f8e3a/Atl%C3%A9tico_Nacional_Campe%C3%B3n_Copa_BetPlay_2021.jpg?auto=webp&format=pjpg&width=3840&quality=60";
imagen1.addEventListener("load", dibujar);
function dibujar() {
  papel1.drawImage(imagen1, 0, 0);
  papel2.drawImage(imagen1, 0, 0);
}
setInterval(mover_nacional, 30);

function mover_nacional() {
  pos_x = pos_x + 7;
  if (pos_x == 500) {
    pos_x = 0;
  }
  papel1.clearRect(0, 0, 500, 500);
  papel1.drawImage(imagen1, pos_y, pos_x);
}

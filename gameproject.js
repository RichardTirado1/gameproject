

var playerX
var playerY
var foodX
var foodY
var foodX2
var foodY2

var xpos = 250
var ypos = 20
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
document.getElementById("dog").setAttribute("x", xpos - 15)
 xpos = xpos - 15
}
 if (e.keyCode == 39) {
document.getElementById("dog").setAttribute("x", xpos + 15)
  xpos = xpos + 15
}
if (e.keyCode == 38) {
document.getElementById("dog").setAttribute("y", ypos - 15)
 ypos = ypos - 15
}
if (e.keyCode == 40) {
document.getElementById("dog").setAttribute("y", ypos + 15)
 ypos = ypos + 15
}

var player1 = document.getElementById("dog")
var food1 = document.getElementById("food1")
var food2 = document.getElementById("food2")

playerX = Number(player1.getAttribute("x"))
playerY = Number(player1.getAttribute("y"))

foodX = Number(food1.getAttribute("x"))
foodY = Number(food1.getAttribute("y"))

foodX2 = Number(food2.getAttribute("x"))
foodY2 = Number(food2.getAttribute("y"))

if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
  food1.setAttribute("fill", "red")
  food2.setAttribute("fill", "red")

  else {
    food1.setAttribute("fill", "green")
    food2.setAttribute("fill", "green")

})


var width = 60
var height = 60
var playerX
var playerY
var foodX
var foodY


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

playerX = Number(player1.getAttribute("x"))
playerY = Number(player1.getAttribute("y"))

foodX = Number(food1.getAttribute("x"))
foodY = Number(food1.getAttribute("y"))

if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
  food1.setAttribute("x", 10)
}
  else {
  food1.setAttribute("fill", "green")
}

})

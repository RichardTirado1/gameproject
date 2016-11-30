
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

var width = 60
var height = 60
var playerX
var playerY
var foodX
var foodY
var foodEaten = 0
var timeStart = Date.now()
var timeStop = Date.now

var xpos = 350
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

playerX = Number(player1.getAttribute("x")) + 25
playerY = Number(player1.getAttribute("y")) + 25

foodX = Number(food1.getAttribute("x"))
foodY = Number(food1.getAttribute("y"))

var rand = randomNumber(10,725);

if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
  food1.setAttribute("x", rand)
  foodEaten = foodEaten + 1
  document.getElementById("foodScore").innerHTML = foodEaten
}

else {
  food1.setAttribute("fill", "green")
}

foodX = Number(food2.getAttribute("x"))
foodY = Number(food2.getAttribute("y"))

if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
  food2.setAttribute("x", rand)
  foodEaten = foodEaten + 1
  document.getElementById("foodScore").innerHTML = foodEaten
}

else {
  food2.setAttribute("fill", "green")
}

if (foodEaten > 5) {
  document.getElementById("screen").pauseAnimations()
  document.getElementById("duration").innerHTML = timeStop - timeStart
}

})

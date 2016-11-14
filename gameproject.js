//PART 2

var xpos = 250
var ypos = 20
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
document.getElementById("dog").setAttribute("x", xpos-15)
 xpos = xpos - 15
}
 if (e.keyCode == 39) {
document.getElementById("dog").setAttribute("x", xpos+15)
  xpos = xpos + 15
}
if (e.keyCode == 38) {
document.getElementById("dog").setAttribute("y", ypos-15)
 ypos = ypos - 15
}
if (e.keyCode == 40) {
document.getElementById("dog").setAttribute("y", ypos+15)
 ypos = ypos + 15
}
 })

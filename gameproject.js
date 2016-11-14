//PART 2

var xpos = 250
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
document.getElementById("dog").setAttribute("x", xpos-15)
 xpos = xpos - 15
}
 if (e.keyCode == 39) {
document.getElementById("dog").setAttribute("x", xpos+15)
  xpos = xpos + 15
}

 })

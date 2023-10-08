
var id = null;
function myMove() {
  var elem = document.getElementById("container");
  var opacity = 0;
  clearInterval(id);
  id = setInterval(frame, 8);
  function frame() {
    if (opacity == 100) {
      clearInterval(id);
    } else {
      opacity++;
      elem.style.opacity = opacity + '%';
    }
  }
}

myMove();
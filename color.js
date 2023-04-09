var names, times, seeds;
var color;
var bg = document.getElementById("bg");

var getRed;
var getBlue;
var getGreen;


var user = window.localStorage.getItem('red')
var checkItems = window.localStorage.getItem('red')

var allow = true;

//check color
if (checkItems === null || checkItems.length === 0) {
  getRed = 240;
  getBlue = 240;
  getGreen = 240;
} else {
  getRed = window.localStorage.getItem("red");
  getBlue = window.localStorage.getItem("blue");
  getGreen = window.localStorage.getItem("green");
}




function toggle() {
  var toggle = document.getElementById('toggle');
  toggle.style.display = (toggle.style.display == 'inline-block') ? 'none' : 'inline-block';
}



document.getElementById("red").value = getRed;
document.getElementById("blue").value = getBlue;
document.getElementById("green").value = getGreen;

var red = getRed;
var blue = getBlue;
var green = getGreen;

var colorEntry = "rgb(" + getRed + "," + getBlue + "," + getGreen + ")"

setTimeout(function () {
  // bg.style.backgroundColor = colorEntry;
  changeColor()

}, 1000)




function changeColor() {


  color = "rgb(" + red + "," + blue + "," + green + ")"
  bg.style.backgroundColor = color;

  localStorage.setItem("red", red);
  localStorage.setItem("blue", blue);
  localStorage.setItem("green", green);


}



function updateRed(slideAmount) {
  red = slideAmount;
  changeColor()
}

function updateBlue(slideAmount) {
  blue = slideAmount;
  changeColor()
}

function updateGreen(slideAmount) {
  green = slideAmount;
  changeColor()
}





dragElement(document.getElementById("moveable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// function minMax(t, e, i, n, o) {
//     return n + (t - e) / (i - e) * (o - n)
// }

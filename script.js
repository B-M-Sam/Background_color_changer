var preview = document.getElementById("prev");

//search color
input01.onchange = function () {
  var color = document.getElementById("input01").value;
  document.body.style.background = color;
  preview.innerHTML = color;
};

//Random Color
function getNewColor() {
  var symbols = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  preview.innerHTML = color;
}

//On Mouse over
document.getElementById("a").addEventListener("mouseover", mouseOverA);
document.getElementById("a").addEventListener("mouseout", mouseOut);

document.getElementById("b").addEventListener("mouseover", mouseOverB);
document.getElementById("b").addEventListener("mouseout", mouseOut);

document.getElementById("c").addEventListener("mouseover", mouseOverC);
document.getElementById("c").addEventListener("mouseout", mouseOut);

document.getElementById("d").addEventListener("mouseover", mouseOverD);
document.getElementById("d").addEventListener("mouseout", mouseOut);

function mouseOut() {
  document.body.style.background = "#2F3542";
  preview.innerHTML = "#2F3542";
}

function mouseOverA() {
  var clr = document.getElementById("a").style.backgroundColor;
  document.body.style.background = clr;
  preview.innerHTML = clr;
}
function mouseOverB() {
  var clr = document.getElementById("b").style.backgroundColor;
  document.body.style.background = clr;
  preview.innerHTML = clr;
}
function mouseOverC() {
  var clr = document.getElementById("c").style.backgroundColor;
  document.body.style.background = clr;
  preview.innerHTML = clr;
}
function mouseOverD() {
  var clr = document.getElementById("d").style.backgroundColor;
  document.body.style.background = clr;
  preview.innerHTML = clr;
}

//Choose color
input02.onchange = function () {
  var b = document.getElementById("input02").value;
  document.body.style.background = b;
  preview.innerHTML = b;
};

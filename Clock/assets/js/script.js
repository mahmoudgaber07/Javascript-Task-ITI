var x = document.getElementById("watch");

var time = setInterval(function () {
var newDate = new Date(),
  h = newDate.getHours(),
  m = newDate.getMinutes(),
  s = newDate.getSeconds();
  var t = newDate.toLocaleTimeString();
  x.innerHTML = t;

}, 0);



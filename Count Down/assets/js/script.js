var val = document.getElementById("value");
var show = document.getElementById("show");
var startbtn = document.getElementById("startBtn");
var resttbtn = document.getElementById("resetBtn");

startbtn.onclick = function () {
  var minute = val.value;
  if (minute != 0) {
    minute -= 1;
    var sec = 60;
    var timeerContDown = setInterval(function () {
      show.innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute--;
        sec = 60;
        if (minute == 00) {
          sec--;
        }
      }
      if (minute == -1) {
        stop(timeerContDown);
        sec = 00;
        minute = 00;
        show.innerHTML = minute + " : " + sec;
      }
    }, 1000);
  } else {
    alert("Please Enter Number");
  }
};

//stop
function stop(t) {
  clearInterval(t);
  console.log("Stop");
}

//reset
resttbtn.addEventListener("click", function () {
  window.location.reload();
});

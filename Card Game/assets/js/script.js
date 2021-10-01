var main = document.getElementsByClassName("main")[0],
  myDivs = document.getElementsByTagName("div"),
  div,
  img;

//sound
var audioRight = new Audio("./assets/sound/right.mp3");
var audioWrong = new Audio("./assets/sound/wrong.mp3");

//img source
var imgArr = [
  "./assets/img/elephant.jpg",
  "./assets/img/fish.jpg",
  "./assets/img/giraffe.jpg",
  "./assets/img/horse.jpg",
  "./assets/img/lion.jpg",
  "./assets/img/zebra.jpg",
  "./assets/img/elephant.jpg",
  "./assets/img/fish.jpg",
  "./assets/img/giraffe.jpg",
  "./assets/img/horse.jpg",
  "./assets/img/lion.jpg",
  "./assets/img/zebra.jpg",
];

//random array
function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current);

    current--;

    temp = array[current];

    array[current] = array[random];

    array[random] = temp;
  }
  return array;
}
shuffle(imgArr);

//Images & Divs
function appendImgInDivs() {
  for (let i = 0; i < imgArr.length; i++) {
    div = document.createElement("div");
    main.appendChild(div);
    img = document.createElement("img");
    img.setAttribute("src", imgArr[i]);
    img.setAttribute("id", imgArr[i]);
    div.appendChild(img);
  }
}
appendImgInDivs();

var emptyArr = [],
  flag = true;
for (var i = 0; i <= myDivs.length - 1; i++) {
  myDivs[i].onclick = function () {
    if (!flag) return;
    this.firstChild.style.opacity = "1";
    if (emptyArr.length == 0) {
      emptyArr[0] = this;
    } else if (emptyArr.length == 1) {
      emptyArr[1] = this;
    }

    if (emptyArr.length == 2) {
      flag = false;
      //invoke check function
      setTimeout(check, 700);
    }
  };
}

//check
function check() {
  if (emptyArr[0].firstChild.id === emptyArr[1].firstChild.id) {
    audioRight.play();
    emptyArr[0].style.opacity = 0;
    emptyArr[1].style.opacity = 0;
  } else {
    audioWrong.play();
    emptyArr[0].firstChild.style.opacity = "0";
    emptyArr[1].firstChild.style.opacity = "0";
  }
  emptyArr = [];
  flag = true;
}

//Restart Game
var rstBtn = document.getElementById("restartBtn");
rstBtn.addEventListener("click", function () {
  window.location.reload();
});

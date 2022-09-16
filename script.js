const slides = document.querySelectorAll(".slide");
const body = document.body;
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let actIdx = 0;

rightBtn.addEventListener("click", increaseSlideBg);
leftBtn.addEventListener("click", decreaseSlideBg);

function increaseSlideBg() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  actIdx++;
  if (actIdx > slides.length - 1) {
    actIdx = 0;
    slides[0].classList.add("active");
  } else {
    slides[actIdx].classList.add("active");
  }
  setBodyBg();
}
function decreaseSlideBg() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  actIdx--;
  if (actIdx < 0) {
    actIdx = slides.length - 1;
    slides[3].classList.add("active");
  } else {
    slides[actIdx].classList.add("active");
  }
  setBodyBg();
}

function setBodyBg() {
  const active = document.querySelector(".active");
  body.style.backgroundImage = active.style.backgroundImage;
}

import "./styles.css";

const carousel = document.querySelector("#carousel-container");
const slides = Array.from(document.querySelector("#carousel-container").children);

let currentSlide = 0;

document.querySelector("#btn-next").addEventListener("click", nextSlide);
document.querySelector("#btn-prev").addEventListener("click", prevSlide);

function nextSlide() {
  if (currentSlide + 1 > slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  carousel.replaceChildren(slides[currentSlide]);
}

function prevSlide() {
  if (currentSlide - 1 < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  carousel.replaceChildren(slides[currentSlide]);
}
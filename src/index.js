import "./styles.css";
import { Timer } from "./timer";

const carousel = document.querySelector("#carousel-container");

const slides = Array.from(
  document.querySelector("#carousel-container").children,
);

const navigation = Array.from(document.querySelectorAll(".navigation"));

let currentSlide = 0;

const timer = new Timer(nextSlide, 5000);

document.querySelector("#btn-next").addEventListener("click", () => {
  nextSlide();
  timer.restart();
});

document.querySelector("#btn-prev").addEventListener("click", () => {
  prevSlide();
  timer.restart();
});

document.querySelector("#direct-navigation").addEventListener("click", (e) => {
  goToSlide(e);
  timer.restart();
});

function nextSlide() {
  const oldSlide = currentSlide;
  if (currentSlide + 1 > slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  carousel.replaceChildren(slides[currentSlide]);
  markNavigation(oldSlide);
}

function prevSlide() {
  const oldSlide = currentSlide;
  if (currentSlide - 1 < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  carousel.replaceChildren(slides[currentSlide]);
  markNavigation(oldSlide);
}

/**
 *
 * @param {Event} e
 */
function goToSlide(e) {
  const index = Number(e.target.dataset.image);

  if (!index && index !== 0) return;
  const oldSlide = currentSlide;
  currentSlide = index;

  carousel.replaceChildren(slides[currentSlide]);
  markNavigation(oldSlide);
}

/**
 *
 * @param {number} oldSlide
 */
function markNavigation(oldSlide) {
  navigation[oldSlide].classList.remove("selected");
  navigation[currentSlide].classList.add("selected");
}

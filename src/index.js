import "./styles.css";

const carousel = document.querySelector("#carousel-container");

const slides = Array.from(
  document.querySelector("#carousel-container").children,
);

const navigation = Array.from(document.querySelectorAll(".navigation"));

let currentSlide = 0;

document.querySelector("#btn-next").addEventListener("click", nextSlide);
document.querySelector("#btn-prev").addEventListener("click", prevSlide);
document
  .querySelector("#direct-navigation")
  .addEventListener("click", goToSlide);

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

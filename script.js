const sliderImgs = document.querySelectorAll(".slider__img");
const sliderText = document.querySelectorAll(".slider__text-content");
const btnRight = document.querySelector(".slider__btn-right");
const btnLeft = document.querySelector(".slider__btn-left");

const nextSlide = () => {
  const currentSlideImg = document.querySelector(".active-photo");

  const currentSlideText = document.querySelector(".active-text");
  currentSlideText.classList.remove("active-text");

  currentSlideImg.classList.remove("active-photo");

  if (
    currentSlideImg.nextElementSibling &&
    currentSlideImg.nextElementSibling.classList.contains("slider__img")
  ) {
    currentSlideImg.nextElementSibling.classList.add("active-photo");
    currentSlideText.nextElementSibling.classList.add("active-text");
  } else {
    sliderImgs[0].classList.add("active-photo");
    sliderText[0].classList.add("active-text");
  }
};
const prevSlide = () => {
  const currentSlideImg = document.querySelector(".active-photo");

  const currentSlideText = document.querySelector(".active-text");
  currentSlideText.classList.remove("active-text");

  currentSlideImg.classList.remove("active-photo");

  if (
    currentSlideImg.previousElementSibling &&
    currentSlideImg.previousElementSibling.classList.contains("slider__img")
  ) {
    currentSlideImg.previousElementSibling.classList.add("active-photo");
    currentSlideText.previousElementSibling.classList.add("active-text");
  } else {
    sliderImgs[sliderImgs.length - 1].classList.add("active-photo");
    sliderText[sliderText.length - 1].classList.add("active-text");
  }
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// navigation
const openBtn = document.querySelector(".nav__open-btn");
const closeBtn = document.querySelector(".nav__close-btn");
const navWrapper = document.querySelector(".nav__list-wrapper");

openBtn.addEventListener("click", () => {
  navWrapper.classList.add("open");
  document.body.classList.add("dark");
});
closeBtn.addEventListener("click", () => {
  navWrapper.classList.remove("open");
  document.body.classList.remove("dark");
});
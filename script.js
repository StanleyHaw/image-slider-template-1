const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".prev-btn");
const rightArrow = document.querySelector(".next-btn");
const image = document.querySelectorAll("img");
const pageButtons = document.querySelectorAll(".page-btn");

let imageIndex = 0,
  intervalId;

const indicators = () => {
  for (let i = 0; i < image.length; i++) {
    pageButtons[i].className = pageButtons[i].className.replace(
      " page-btn-active",
      ""
    );
  }
  pageButtons[imageIndex].className =
    pageButtons[imageIndex].className + " page-btn-active";
};

const slideImage = () => {
  if (imageIndex === image.length) {
    imageIndex = 0;
  } else {
    imageIndex;
  }
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
  indicators();
};

const autoSlide = () => {
  intervalId = setInterval(() => {
    imageIndex++;
    slideImage();
  }, 1000);
};

const changeImage = (changePage) => {
  imageIndex += changePage;
  if (imageIndex < 0) {
    imageIndex = image.length - 1;
  } else {
    imageIndex;
  }
  if (imageIndex === image.length) {
    imageIndex = 0;
  } else {
    imageIndex;
  }
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
  indicators();
};

pageButtons.forEach((pageBtn, pageIndex) => {
  pageBtn.addEventListener("click", () => {
    imageIndex = pageIndex;
    indicators();
    slideImage();
  });
});

autoSlide();
rightArrow.addEventListener("click", () => changeImage(1));
leftArrow.addEventListener("click", () => changeImage(-1));
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);

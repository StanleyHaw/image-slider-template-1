const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  image = document.querySelectorAll("img"),
  leftArrow = document.getElementById("prev-btn"),
  rightArrow = document.getElementById("next-btn"),
  pageButtons = document.querySelectorAll(".page-btn");
const pageButtonArray = Array.from(pageButtons);

let imageIndex = 0,
  intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => slideImage(imageIndex++), 3000);
};

const slideImage = () => {
  imageIndex =
    imageIndex === image.length
      ? 0
      : imageIndex < 0
      ? imageIndex - 1
      : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const changeImage = (changePage) => {
  imageIndex += changePage;
  imageIndex =
    imageIndex < 0
      ? image.length - 1
      : imageIndex >= image.length
      ? 0
      : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const changeImageToIndex = (pageIndex) => {
  imageIndex = pageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;

  pageButtonArray.forEach((pageBtn, pageBtnIndex) => {
    pageBtn.style.backgroundColor =
      pageBtnIndex === pageIndex ? "rgb(0, 136, 255)" : "rgba(0, 0, 0, 0.15)";
  });
};

pageButtonArray.forEach((pageBtn, pageIndex) => {
  pageBtn.addEventListener("click", () => changeImageToIndex(pageIndex));
  pageBtn.addEventListener("mouseover", () => {
    pageBtn.style.backgroundColor =
      pageIndex !== imageIndex
        ? "rgba(0, 0, 0, 0.3)"
        : pageBtn.style.backgroundColor(pageIndex);
  });
  pageBtn.addEventListener("mouseleave", () => {
    pageBtn.style.backgroundColor =
      pageIndex !== imageIndex
        ? "rgba(0, 0, 0, 0.15)"
        : pageBtn.style.backgroundColor(pageIndex);
  });
});

autoSlide();
rightArrow.addEventListener("click", () => changeImage(1));
leftArrow.addEventListener("click", () => changeImage(-1));
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);

const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.prev-btn');
const rightArrow = document.querySelector('.next-btn');
const image = document.querySelectorAll('img');
const pageButtons = document.querySelectorAll('.page-btn');

let imageIndex = 0;
const intervalId = 0;

const changeImagePage = () => {
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const slideImage = () => {
  if (imageIndex === image.length) {
    imageIndex = 0;
  } else {
    imageIndex;
  }
  changeImagePage();
};

console.log('main');

const slideDots = () => {
  for (let i = 0; i < image.length; i++) {
    pageButtons[i].className = pageButtons[i].className.replace(
      ' page-btn-active',
      ''
    );
  }
  pageButtons[imageIndex].className =
    pageButtons[imageIndex].className + ' page-btn-active';
};

const INTERVAL_MILLISECONDS = 2000;

const autoSlide = () => {
  intervalId = setInterval(() => {
    imageIndex++;
    slideImage();
    slideDots();
  }, INTERVAL_MILLISECONDS);
};

const pauseAutoSlide = () => {
  clearInterval(intervalId);
};

const firstPageIndex = 0;
const lastPageIndex = image.length - 1;

const increaseImageIndex = () => {
  if (imageIndex === lastPageIndex) {
    imageIndex = firstPageIndex;
  } else {
    imageIndex++;
  }
  slideImage();
  slideDots();
};

const decreaseImageIndex = () => {
  if (imageIndex === firstPageIndex) {
    imageIndex = lastPageIndex;
  } else {
    imageIndex--;
  }
  slideImage();
  slideDots();
};

pageButtons.forEach((pageBtn, pageIndex) => {
  pageBtn.addEventListener('click', () => {
    imageIndex = pageIndex;
    slideImage();
    slideDots();
  });
});

autoSlide();
wrapper.addEventListener('mouseover', () => pauseAutoSlide());
wrapper.addEventListener('mouseleave', () => autoSlide());
rightArrow.addEventListener('click', () => increaseImageIndex());
leftArrow.addEventListener('click', () => decreaseImageIndex());
//leftArrow.addEventListener("click", decreaseImageIndex); 跟上面有什麼不一樣

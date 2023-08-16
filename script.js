const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.prev-btn');
const rightArrow = document.querySelector('.next-btn');
const images = document.querySelectorAll('img');
const pageButtons = document.querySelectorAll('.page-btn');

let imageIndex = 0;
let intervalId = null;

const INTERVAL_MILLISECONDS = 2000;
const FIRST_PAGE_INDEX = 0;
const LAST_PAGE_INDEX = images.length - 1;

const changeImagePage = () => {
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const toggleActiveDotStyle = () => {
  // for (let i = 0; i < images.length; i++) {
  //   if (i === imageIndex) {
  //     pageButtons[i].classList.add('page-btn-active');
  //   } else {
  //     pageButtons[i].classList.remove('page-btn-active');
  //   }
  // }

  pageButtons.forEach((button, index) => {
    if (index === imageIndex) {
      button.classList.add('page-btn-active');
    } else {
      button.classList.remove('page-btn-active');
    }
  });
};

const increaseActiveImage = () => {
  if (imageIndex === LAST_PAGE_INDEX) {
    imageIndex = FIRST_PAGE_INDEX;
  } else {
    imageIndex++;
  }
  toggleActiveDotStyle();
  changeImagePage();
};

const decreaseActiveImage = () => {
  if (imageIndex === FIRST_PAGE_INDEX) {
    imageIndex = LAST_PAGE_INDEX;
  } else {
    imageIndex--;
  }
  toggleActiveDotStyle();
  changeImagePage();
};

const switchActiveImage = (activeDot) => {
  imageIndex = activeDot;
  toggleActiveDotStyle();
  changeImagePage();
};

const autoSlideImage = () => {
  intervalId = setInterval(() => {
    increaseActiveImage();
  }, INTERVAL_MILLISECONDS);
};

const pauseAutoSlideImage = () => {
  clearInterval(intervalId);
};

pageButtons.forEach((pageBtn, pageIndex) => {
  pageBtn.addEventListener('click', () => {
    switchActiveImage(pageIndex);
  });
});

wrapper.addEventListener('mouseover', pauseAutoSlideImage);
wrapper.addEventListener('mouseleave', autoSlideImage);
leftArrow.addEventListener('click', decreaseActiveImage);
rightArrow.addEventListener('click', increaseActiveImage);
autoSlideImage();

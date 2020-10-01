const track2 = document.querySelector('.carousel__track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel__button--right2');
const prevButton2 = document.querySelector('.carousel__button--left2');
const dotsNav2 = document.querySelector('.carousel__nav2');
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition2 = (slide2, index) => {
  slide2.style.left = slideWidth2 * index + 'px';
};
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
  track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
  currentSlide2.classList.remove('current-slide2');
  targetSlide2.classList.add('current-slide2');
}

const updateDots2 = (currentDot2, targetDot2) => {
  currentDot2.classList.remove('current-slide2');
  targetDot2.classList.add('current-slide2');
}

const hideShowArrows2 = (slides2, prevButton2, nextButton2, targetIndex2) => {
  if (targetIndex2 === 0) {
    prevButton2.classList.add('is-hidden2');
    nextButton2.classList.remove('is-hidden2');
  } else if (targetIndex2 === slides.length - 1) {
    prevButton2.classList.remove('is-hidden2');
    nextButton2.classList.add('is-hidden2');
  } else {
    prevButton2.classList.remove('is-hidden2');
    nextButton2.classList.remove('is-hidden2');
  }
}

//when I click left move slides to the left
prevButton2.addEventListener('click', e => {
  const currentSlide2 = track2.querySelector('.current-slide2');
  const prevSlide2 = currentSlide2.previousElementSibling;
  const currentDot2 = dotsNav2.querySelector('.current-slide2');
  const prevDot2 = currentDot2.previousElementSibling;
  const prevIndex2 = slides2.findIndex(slide2 => slide2 === prevSlide2);

  moveToSlide2(track2, currentSlide2, prevSlide2);
  updateDots2(currentDot2, prevDot2);
  hideShowArrows2(slides2, prevButton2, nextButton2, prevIndex2);

});


//when I click right move slides to the right
nextButton2.addEventListener('click', e => {
  const currentSlide2 = track2.querySelector('.current-slide2');
  const nextSlide2 = currentSlide2.nextElementSibling;
  const currentDot2 = dotsNav2.querySelector('.current-slide2');
  const nextDot2 = currentDot2.nextElementSibling;
  const nextIndex2 = slides2.findIndex(slide2 => slide2 === nextSlide2);

  moveToSlide2(track2, currentSlide2, nextSlide2);
  updateDots2(currentDot2, nextDot2);
  hideShowArrows2(slides2, prevButton2, nextButton2, nextIndex2);

});


//when I click the nav indicators, move to that slide

dotsNav2.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot2 = e.target.closest('button');

  if(!targetDot2) return;

  const currentSlide2 = track2.querySelector('.current-slide2');
  const currentDot2 = dotsNav2.querySelector('.current-slide2');
  const targetIndex2 = dots2.findIndex(dot2 => dot2 === targetDot2)
  const targetSlide2 = slides2[targetIndex2];

  moveToSlide2(track2, currentSlide2, targetSlide2);
  updateDots2(currentDot2, targetDot2);
  hideShowArrows2(slides2, prevButton2, nextButton2, targetIndex2);


})

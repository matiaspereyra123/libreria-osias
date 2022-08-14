window.addEventListener('DOMContentLoaded', (event)=>{


const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;


// const boxesSection = document.querySelector(".boxes-section")
// const boxes = Array.from(boxesSection.children)

// const boxWidth = boxes[0].getBoundingClientRect().width;

// console.log(boxWidth);


// const setBoxPosition = (box, index) => {
//     box.style.right = slideWidth * index + "px";

// }


// boxes.forEach(setBoxPosition);
 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";

}



slides.forEach(setSlidePosition);

// const moveToBox = (boxesSection, currentBox, targetBox) => {
//     boxesSection.style.transform = "translateX(-" + targetBox.style.left + ")";
//     currentBox.classList.remove("current-box")
//     targetBox.classList.add("current-box")
// }

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    

}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide")
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
        
    }
    else if (targetIndex === slides.length -1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
    } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");

    }
}

//mover diapo a la izquierda al hacer clic en el botón izquierdo

prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

})


//mover diapo a la derecha al hacer clic en el botón derecha

nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    // const currentBox = boxesSection.querySelector(".current-box");
    // const nextBox = currentBox.nextElementSibling;


    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

    // moveToBox(boxesSection, currentBox, nextBox)

   



})

//mover la diapo al hacer clic en los puntos

dotsNav.addEventListener("click", e => {
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");

    const currentDot = dotsNav.querySelector(".current-slide");

    const targetIndex = dots.findIndex(dot => dot === targetDot);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot); 

    hideShowArrows(slides, prevButton, nextButton, targetIndex);  

})










})
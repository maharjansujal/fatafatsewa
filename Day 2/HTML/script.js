// script.js
const scrollerContent = document.querySelector('.scroller-content');
const images = document.querySelectorAll('.image');
const imageWidth = images[0].offsetWidth; // Get the width of a single image
const totalImages = images.length;
const visibleImages = 4; // Number of images visible at a time
const scrollInterval = 2000; // Time interval for scrolling in milliseconds

let currentIndex = 0;

function scrollImages() {
    currentIndex += visibleImages;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    scrollerContent.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(scrollImages, scrollInterval);

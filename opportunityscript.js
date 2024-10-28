// JavaScript code (for future interaction if needed)

document.querySelector('.back-button').addEventListener('click', () => {
    window.history.back(); // Go back to the previous page
});

document.querySelector('.apply-button').addEventListener('click', () => {
    alert("Application process for this opportunity is under construction.");
});

let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll(".carousel-image");
    const totalImages = images.length;
    
    currentIndex += direction;

    // Loop back to the first image if we exceed the last image and vice versa
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Move the carousel to show the selected image
    document.querySelector(".carousel-images").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navbar Menu Toggle Script
// This script toggles the visibility of the navigation links when the menu icon is clicked.

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    // Ensure the menu icon and nav links are present
    const navLinkElements = document.querySelectorAll(".nav-link");
    navLinkElements.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
    // Toggle the active class on the nav-links when the menu icon is clicked

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Projects Carousel Script
// This script enables horizontal scrolling for the projects carousel.

let currentSlideIndex = 0;

function moveSlide(n) {
    showSlides(currentSlideIndex += n);
}

function showSlides(n) {
    const projectItems = document.querySelectorAll('.project-item');
    const dot = document.querySelectorAll('dot');
    const projectsCarousel = document.querySelector('.projects-carousel');

    if (projectItems.length === 0) {
        return; // No project items to display
    }

    if (n >= projectItems.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = projectItems.length - 1;
    }

    const itemWidth = projectItems[0].offsetWidth + (parseFloat(getComputedStyle(projectItems[0]).marginLeft) * 2);

    document.querySelector('.project-items').scrollTo({
        left: currentSlideIndex * itemWidth,
        behavior: 'smooth'
    });

    // Update active dots

    dots.forEach(dot => dot.classList.remove('active'));
    if (dot[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentSlideIndex);
});

document.querySelector('.project-items').addEventListener('scroll', () => {
    
})
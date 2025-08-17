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
    const dots = document.querySelectorAll('dot');
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
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active')
    }
}

// Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentSlideIndex);
});

// Makes Hero Section Title and subtitle Characters enlarge slightly when hovered over
document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.getElementById('hero-title');
    const heroContainer = document.getElementById('hero-container');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (!heroTitle || !heroContainer || !heroSubtitle) {
        console.error('One or more hero elements not found.');
        return;
    }

    // --- Process Hero Title ---
    const originalTitleText = heroTitle.textContent.replace(/\s*<br>\s*/g, ' ').trim();
    heroTitle.remove();

    const newHeroTitle = document.createElement('h1');
    newHeroTitle.id = 'hero-title';

    const titleWords = originalTitleText.split(' ');
    titleWords.forEach((word, index) => {
        const wordContainer = document.createElement('span');
        wordContainer.classList.add('word-container');

        word.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            wordContainer.appendChild(span);
        });

        newHeroTitle.appendChild(wordContainer);

        // Check if the last character of the word is a comma
        if (word.endsWith(',')) {
            const br = document.createElement('br');
            newHeroTitle.appendChild(br);
        } else if (index < titleWords.length - 1) { // Add space for regular words
            const space = document.createElement('span');
            space.textContent = ' ';
            space.classList.add('word-space');
            newHeroTitle.appendChild(space);
        }
    });


    // --- Process Hero Subtitle ---
    const originalSubText = heroSubtitle.textContent.replace(/\s*<br>\s*/g, ' ').trim();
    heroSubtitle.remove(); // Remove the original p

    const newHeroSubtitle = document.createElement('p');
    newHeroSubtitle.id = 'hero-subtitle';

    const subWords = originalSubText.split(' ');
    subWords.forEach((word, index) => {
        const wordContainer = document.createElement('span');
        wordContainer.classList.add('word-container');

        word.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            wordContainer.appendChild(span);
        });

        newHeroSubtitle.appendChild(wordContainer);

        // Add a space between words
        if (index < subWords.length - 1) {
            const space = document.createElement('span');
            space.textContent = ' ';
            space.classList.add('subtitle-word-space');
            newHeroSubtitle.appendChild(space);
        }
    });

    // --- Final Placement ---
    // Prepend the new elements to the container in the correct order
    heroContainer.prepend(newHeroSubtitle);
    heroContainer.prepend(newHeroTitle);
});

// Project Pop Up Card interactivity

document.addEventListener('DOMContentLoaded', function () {
    const viewProjButtons = document.querySelectorAll('.project-btn');
    const popupContainer = document.getElementById('project-popover');
    const popupContent = document.getElementById('popover-content');

    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const closeBtn = document.getElementById('close-btn');

    viewProjButtons.forEach(button => {
        button.addEventListener('click', openPopUp);
    });

    closeBtn.addEventListener('click', closePopUp);

    // For Opening Project Popover

    function openPopUp(event) {
        event.preventDefault();
        // Using attribute data to load individual project info as we are not using a backend
        const projectTitleText = event.currentTarget.getAttribute('data-project-title');
        const projectDescriptionText = event.currentTarget.getAttribute('data-project-description');

        projectTitle.textContent = projectTitleText;
        projectDescription.textContent = projectDescriptionText;

        popupContainer.classList.add('proj-active');
    }

    // For closing Project popover
    function closePopUp() {
        popupContent.classList.add('popover-closing'); // This class animates out the popover by scaling down.
        popupContainer.classList.add('background-none');
        popupContent.addEventListener('animationend', handleAnimationEnd, { once: true }); // Removes animation, active and bg none classes. Once animation ends
    }

    function handleAnimationEnd() {
        popupContainer.classList.remove('proj-active', 'background-none');
        popupContent.classList.remove('popover-closing');
    }
});
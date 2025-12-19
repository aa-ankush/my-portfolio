// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check Local Storage for saved preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Add Click Event Listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Switch Icon and Save Preference
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-lightbulb');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-lightbulb');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Get the button
const backToTopBtn = document.getElementById("floatingBackToTop");

// Listen for the scroll event
window.addEventListener("scroll", () => {
    // If user scrolls down more than 300px, show the button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Scroll to top smoothly when clicked
backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor jump
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Select the header element
const header = document.querySelector('header');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // If scrolled down more than 50px...
    if (window.scrollY > 50) {
        // Add the 'scrolled' class
        header.classList.add('scrolled');
    } else {
        // Otherwise, remove it (back to transparent)
        header.classList.remove('scrolled');
    }
});
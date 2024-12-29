// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Apply the current theme from localStorage
if (currentTheme) {
    document.body.classList.add(currentTheme);
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.add(currentTheme); // Add the current theme class to nav-links
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.add(currentTheme); // Add the current theme class to menu-toggle
    if (currentTheme === 'dark') {
        themeToggleBtn.textContent = '☀️'; // Change icon to sun for dark theme
    }
}

// Event listener for theme toggle button
themeToggleBtn.addEventListener('click', (event) => {
    // Prevent the mobile menu from toggling when the theme toggle button is clicked
    event.stopPropagation();

    // Toggle the dark class on the body
    document.body.classList.toggle('dark');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('dark'); // Toggle dark class on nav-links
    navLinks.classList.toggle('light'); // Toggle light class on nav-links

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('dark'); // Toggle dark class on menu-toggle
    menuToggle.classList.toggle('light'); // Toggle light class on menu-toggle

    let theme = 'light';
    if (document.body.classList.contains('dark')) {
        theme = 'dark';
        themeToggleBtn.textContent = '☀️'; // Change icon to sun for dark theme
    } else {
        themeToggleBtn.textContent = '🌙'; // Change icon to moon for light theme
    }
    localStorage.setItem('theme', theme); // Save the current theme to localStorage
});

// Contact Form Functionality
const contactForm = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.'); // Validate email
            return;
        }
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: email,
            message: document.getElementById('message').value
        };
        
        localStorage.setItem('contactFormData', JSON.stringify(formData)); // Save form data to localStorage

        // Show thank you message and hide the form
        contactForm.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');

        // Reset the form after submission
        contactForm.reset();
        setTimeout(() => {
            thankYouMessage.classList.add('hidden');
            contactForm.classList.remove('hidden');
        }, 3000); // Hide thank you message after 3 seconds
    });
}

// Mobile Menu Functionality
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the mobile menu visibility

    // Change the background color of the menu toggle based on the current theme
    const menuToggle = document.querySelector('.menu-toggle');
    if (document.body.classList.contains('dark')) {
        menuToggle.classList.remove('light');
        menuToggle.classList.add('dark');
    } else {
        menuToggle.classList.remove('dark');
        menuToggle.classList.add('light');
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase()); // Validate the email format
}
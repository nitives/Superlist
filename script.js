// Get references to the button and icon elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkIcon = document.getElementById('dark-icon');
const body = document.body;

// Initialize a variable to track the dark mode state
let isDarkMode = true;
let rotationDegree = 0; // Initialize the rotation degree

// Function to toggle dark mode and update the icon and styles accordingly
function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Update the rotation degree
    rotationDegree += 180;
    if (rotationDegree >= 360) {
        rotationDegree -= 360;
    }

    // Rotate the icon based on the rotation degree
    darkIcon.style.transform = `rotate(${rotationDegree}deg)`;

    // Toggle the logo images based on dark mode state
    const lightLogo = document.getElementById('light-logo');
    const darkLogo = document.getElementById('dark-logo');
    
    lightLogo.hidden = isDarkMode;
    darkLogo.hidden = !isDarkMode;
}

// Initially, set the page to the inverted default mode (dark mode)
toggleDarkMode();

// Add click event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

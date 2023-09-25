// Get references to the button and icon elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

// Initialize a variable to track the dark mode state with inverted default
let isDarkMode = true; // Invert the default mode to dark mode

// Function to toggle dark mode and update the icon and styles accordingly
function toggleDarkMode() {
  isDarkMode = !isDarkMode;

  // Toggle the 'dark-mode' class on the body
  body.classList.toggle('dark-mode');

  // Toggle the icon class based on the dark mode state
  if (isDarkMode) {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  } else {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  }
}

// Initially, set the page to the inverted default mode (dark mode)
toggleDarkMode();

// Add click event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);



// Get references to the button and icon elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

// Initialize a variable to track the dark mode state
let isDarkMode = false;

// Toggle dark mode and update the icon accordingly
darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    // Add code to enable dark mode styles here
  } else {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    // Add code to disable dark mode styles here
  }
});

// Get references to the button and icon elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

// Initialize a variable to track the dark mode state
let isDarkMode = false;

// Toggle dark mode and update the icon and styles accordingly
darkModeToggle.addEventListener('click', () => {
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
});

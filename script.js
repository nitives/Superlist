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

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Initially, set the page to the inverted default mode (dark mode)
toggleDarkMode();

// Add click event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Ad Block Detect
document.addEventListener('DOMContentLoaded', function () {
    const detect = document.querySelector("#detect");
    const wrapper = document.querySelector(".wrapper");

    console.log("Detection started...");

    const adBlockDetectionElement = document.createElement('div');
    adBlockDetectionElement.className = 'ad-block-detection-element';
    adBlockDetectionElement.style.height = '1px'; // An invisible element that ad-blockers usually remove

    // Append the adBlockDetectionElement after the DOM has loaded
    document.body.appendChild(adBlockDetectionElement);

    // Check if the ad-blocker detection element is hidden by an ad-blocker
    if (adBlockDetectionElement.offsetHeight === 0) {
        // Ad-blocker detected
        console.log("Ad-blocker detected.");
        detect.style.display = 'block';
        wrapper.style.display = 'block';
    } else {
        console.log("No ad-blocker detected.");
    }

    // Function to hide both #detect and .wrapper
    function hideDetection() {
        detect.style.display = 'none';
        wrapper.style.display = 'none';
    }

    // Initially, hide #detect and .wrapper
    hideDetection();

    // You can add an event listener to a button inside your .wrapper to hide the elements when the user clicks the button.
    // Example:
    const closeButton = wrapper.querySelector("#refreshButton");
    if (closeButton) {
        closeButton.addEventListener("click", hideDetection);
    }
});

// -----------------------------------------------------------------------------------------------------------------------------------------------
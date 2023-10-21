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


// Ad Block Detect
const detect = document.querySelector("#detect");
const wrapper = document.querySelector(".wrapper");
const button = detect.querySelector("button");

let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
for (let item of adClasses) {
    detect.classList.add(item);
}

// Function to show #detect
function showDetection() {
    detect.classList.add("show");
    wrapper.classList.remove("show");
}

// Function to show both #detect and .wrapper
function showBoth() {
    detect.classList.add("show");
    wrapper.classList.add("show");
}

// Function to hide both #detect and .wrapper
function hideDetection() {
    detect.classList.remove("show");
    wrapper.classList.remove("show");
}

button.addEventListener("click", hideDetection);

// Initially, hide #detect and .wrapper
hideDetection();

document.addEventListener('DOMContentLoaded', function () {
    var refreshButton = document.getElementById('refreshButton');
    if (refreshButton) {
        refreshButton.addEventListener('click', function () {
            location.reload(); // Reload the page
        });
    }
});

// Console Log
document.addEventListener('DOMContentLoaded', function () {
    const adBlockDetectionElement = document.querySelector('.ad-block-detection-element');
    
    if (adBlockDetectionElement) {
        // Ad blocker detected
        console.log("You're using an ad blocker and preventing me from generating revenue. Please consider disabling it.");
        // Show #detect only when an ad blocker is detected
        showDetection();
    }
});

// -----------------------------------------------------------------------------------------------------------------------------------------------
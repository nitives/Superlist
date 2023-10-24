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

    const detect = document.querySelector("#detect");
    const wrapper = document.querySelector(".wrapper");
    const button = wrapper.querySelector("button");

    let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
    for (let item of adClasses) {
    detect.classList.add(item);
    }
    let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

    console.log("Checking for ad classes:", adClasses);
    console.log("Property value of 'detect' element:", getProperty);

    if (!wrapper.classList.contains("show")) {
    getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show");
    }

    button.addEventListener("click", () => {
    wrapper.classList.remove("show");
    });

    // Check for ad blocker
    const hasAdblocker = getProperty == "none" ? "Yes" : "No";
    console.log("Is there an ad blocker: " + hasAdblocker);

// -----------------------------------------------------------------------------------------------------------------------------------------------

var video = document.getElementById("videoBG");

function removeControls() {
  if (window.innerWidth < 768) { // Adjust the screen width as needed
    video.removeAttribute("controls");
  } else {
    video.setAttribute("controls", "true");
  }
}

// Call the function on page load and when the window is resized
window.addEventListener("load", removeControls);
window.addEventListener("resize", removeControls);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Function to change the icon based on the color scheme
function changeIconForColorScheme() {
    // Identify the icon element by its ID
    const iconLink = document.getElementById('ico');
  
    // Check if the user has a preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If dark mode is preferred, change the icon to the dark mode version
      iconLink.href = '/assets/logo/favicon-white.ico';
    } else {
      // If light mode is preferred, change the icon to the light mode version
      iconLink.href = '/assets/logo/favicon-black.ico';
    }
  }
  
  // Initially call the function to set the correct icon on page load
  changeIconForColorScheme();
  
  // Add an event listener to detect changes in the color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    changeIconForColorScheme();
  });
  
  
// ----------------------------------------------------------------------------------------------
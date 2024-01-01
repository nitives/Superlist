document.addEventListener('DOMContentLoaded', function () {
    const favicon = document.getElementById('favicon');
    
    // Check if dark mode is enabled
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Script is running.');
    console.log('Dark mode is enabled:', isDarkMode);
    
    // Set the favicon based on the theme
    if (isDarkMode) {
        favicon.href = "/assets/logo/favicon-black.ico";
        console.log('Setting favicon to black for dark mode.');
    } else {
        favicon.href = "/assets/logo/favicon-white.ico";
        console.log('Setting favicon to white for light mode.');
    }
    
    // Listen for changes in the preferred color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        if (e.matches) {
        favicon.href = "/assets/logo/favicon-black.ico";
        console.log('Switched to dark mode. Setting favicon to black.');
        } else {
        favicon.href = "/assets/logo/favicon-white.ico";
        console.log('Switched to light mode. Setting favicon to white.');
        }
    });
    });
    
    // -----------------------------------------------------------------------------------
    
    var debounceTimer;
    
    // Function to handle live search
    function searchSites() {
      // Clear the previous debounce timer
      clearTimeout(debounceTimer);
    
      // Set a new debounce timer
      debounceTimer = setTimeout(function() {
        // Get the search input value
        var searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
        // Get all the card elements
        var cards = document.querySelectorAll('.bg-n-container');
    
        // Loop through each card and check if it contains the search query
        cards.forEach(function(card) {
          var cardId = card.id.toLowerCase();
          if (cardId.includes(searchQuery)) {
            // If the card ID contains the search query, show the card
            card.style.display = 'flex';
          } else {
            // If not, hide the card
            card.style.display = 'none';
          }
        });
      }, 300); // Adjust the debounce delay (in milliseconds) as needed
    }
    
    // Add event listener for the input event on the search input field
    document.getElementById('searchInput').addEventListener('input', searchSites);
    
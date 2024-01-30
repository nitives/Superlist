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

    function searchSites() {
      clearTimeout(debounceTimer);
    
      debounceTimer = setTimeout(function() {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase();
        var cards = document.querySelectorAll('.bg-n-container:not(#searchInput)');
    
        cards.forEach(function(card) {
          if (searchQuery === '') {
            // If the search query is empty, display all cards
            card.style.display = 'flex';
          } else {
            var dataTags = card.getAttribute('data-tags');
            var tags = dataTags ? dataTags.toLowerCase().split(',') : [];
    
            var match = tags.some(function(tag) {
              return tag.trim().includes(searchQuery);
            });
    
            card.style.display = match ? 'flex' : 'none';
          }
        });
      }, 300);
    }
    
    document.getElementById('searchInput').addEventListener('input', searchSites);
    
    
    window.addEventListener("keydown", (e) => {
      if (e.code === 'F3' || ((e.ctrlKey || e.metaKey) && e.code === 'KeyK')) { 
        e.preventDefault();
        const searchInput = document.querySelector('#searchInput')
        searchInput.focus()
      }
    })
    
    
    

/*
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
    console.log('Open Popup');
  }
  
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    console.log('Closed Popup');
  }
  
  // Event listener for the clickable box to open the modal
  document.getElementById('clickable-box').addEventListener('click', function(event){
    event.preventDefault();
    openModal();
  });

  document.getElementById('ModalClose').addEventListener('click', function(event){
    event.preventDefault();
    closeModal();
  });
*/

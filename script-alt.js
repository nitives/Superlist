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
    

/* Mac & Windows Search Icon */

document.addEventListener('DOMContentLoaded', function() {
  var isMac = navigator.userAgent.indexOf('Mac') > -1;
  console.log('Is Mac:', isMac);
  var keyboardShortcut = document.querySelector('.keyboard-shortcut');
  if (isMac) {
    keyboardShortcut.parentElement.classList.add('mac');
    console.log('Mac Device - Icon Added');
  } else {
    keyboardShortcut.parentElement.classList.add('windows');
    console.log('Windows Device - Icon Added');
  }
});


/* ------------------------------- */

/* Menu Button */

const menu = document.querySelector('MobileMenu')

document.addEventListener('click', function () {
    menu.classList.toggle('is-active')
})

/* ------------------------------- */

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

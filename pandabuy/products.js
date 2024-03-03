// Function to create HTML elements for each product
function createProductElement(product) {
    const link = document.createElement("a");
    link.classList.add("product");
    link.id = 'productFind';
    link.href = product.link || '#'; // Set link or a fallback value if not provided
    link.setAttribute('data-tags', product.tags.join(',')); // Add data-tags attribute
    link.innerHTML = `
        <img src="${product.image}" alt="Image of ${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
    `;
    return link;
}


    // <img src="${product.image}" alt="${product.name}">

// Function to display products
function displayProducts(products) {
    const grid = document.getElementById("productGrid");
    products.forEach(product => {
        const productElement = createProductElement(product);
        grid.appendChild(productElement);
    });
}

// Fetch products from products.json
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });

// Search

var debounceTimer;

    function searchSites() {
      clearTimeout(debounceTimer);
    
      debounceTimer = setTimeout(function() {
        var searchQuery = document.getElementById('searchInput').value.toLowerCase();
        var cards = document.querySelectorAll('#productFind:not(#searchInput)');
    
        cards.forEach(function(card) {
          if (searchQuery === '') {
            // If the search query is empty, display all cards
            card.style.display = 'grid';
          } else {
            var dataTags = card.getAttribute('data-tags');
            var tags = dataTags ? dataTags.toLowerCase().split(',') : [];
    
            var match = tags.some(function(tag) {
              return tag.trim().includes(searchQuery);
            });
    
            card.style.display = match ? 'grid' : 'none';
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
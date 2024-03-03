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
      var cards = document.querySelectorAll('.product'); // Use class to select, not ID
  
      cards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase();
        var description = card.querySelector('p').textContent.toLowerCase();
        var dataTags = card.getAttribute('data-tags');
        var tags = dataTags ? dataTags.toLowerCase().split(',') : [];
  
        // Check if the search query is in the title, description, or any of the tags
        var match = title.includes(searchQuery) || description.includes(searchQuery) || tags.some(function(tag) {
          return tag.trim().includes(searchQuery);
        });
  
        // Toggle the display based on the match
        card.style.display = match ? 'grid' : 'none';
      });
    }, 300);
  }
  
  // Add event listeners to both search inputs
  document.querySelectorAll('.searchInput').forEach(input => {
    input.addEventListener('input', searchSites);
  });
    
    document.getElementById('searchInput').addEventListener('input', searchSites);
    window.addEventListener("keydown", (e) => {
      if (e.code === 'F3' || ((e.ctrlKey || e.metaKey) && e.code === 'KeyK')) { 
        e.preventDefault();
        const searchInput = document.querySelector('#searchInput')
        searchInput.focus()
      }
    })
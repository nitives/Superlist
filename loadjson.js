// Load JSON configuration file
fetch('config.json')
.then(response => response.json())
.then(data => {
    // Update elements with specific IDs
    document.getElementById('var-title').textContent = data.title || '';
    document.getElementById('var-version').textContent = data.version || '';
})
.catch(error => {
    console.error('Error loading configuration:', error);
});
const fs = require('fs');

// Read configuration file
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Function to update HTML files with the configuration values
function updateHTMLFiles() {
    // Iterate over each key-value pair in the configuration
    for (const [key, value] of Object.entries(config)) {
        // Loop through each HTML file
        fs.readdirSync('./').forEach(file => {
            if (file.endsWith('.html')) {
                let template = fs.readFileSync(file, 'utf8');
                template = template.replace(new RegExp(`(<[^>]+\\bid\\s*=\\s*['"]var-${key}['"][^>]*>)(.*?)(<\\/\\w+>)`, 'g'), `$1${value}$3`);
                fs.writeFileSync(file, template);
                console.log(`${file} updated successfully.`);
            }
        });
    }
}

// Call the function to update HTML files
updateHTMLFiles();

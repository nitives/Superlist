const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp'); // Import sharp

/* 
const websites = [
  { id: 'FileCR', url: 'https://filecr.com/en/' },
  { id: '4Download', url: 'http://www.4download.net' },
  { id: 'SoftProber', url: 'https://softprober.com' },
  { id: 'MovieWeb', url: 'https://movie-web.app' },
  { id: 'GFXFather', url: 'https://gfxfather.com' },
  { id: 'MangaDex', url: 'https://mangadex.org' },
  { id: 'Comick', url: 'https://comick.cc/home' },
  { id: 'noclip.website', url: 'https://noclip.website' },
  { id: 'Annas Archive', url: 'https://www.annas-archive.org' },
  { id: 'GetIntoPc', url: 'https://getintopc.com/' },
  { id: 'Superlist', url: 'https://superlist.cc' },
];
*/

const websites = [
  { id: 'rezi', url: 'https://rezi.one' },
  { id: 'ovagames', url: 'https://www.ovagames.com' },
];

// Specify the folder path where you want to save the screenshots
const screenshotsFolderPath = path.join(__dirname, 'assets', 'site-captures');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });

  for (const site of websites) {
    const page = await browser.newPage();

    // Set viewport size for capturing screenshot
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 15000 });

    // Wait for an additional 5 seconds (adjust as needed)
    await page.waitForTimeout(5000);

    // Ensure the directory exists, create it if not
    if (!fs.existsSync(screenshotsFolderPath)) {
      fs.mkdirSync(screenshotsFolderPath, { recursive: true });
    }

    // Capture screenshot
    await page.screenshot({ path: path.join(screenshotsFolderPath, `${site.id}_screenshot.png`) });

    // Capture favicon
    const faviconElement = await page.$('link[rel="icon"]');
    if (faviconElement) {
      const faviconSrc = await page.$eval('link[rel="icon"]', (el) => el.href);
      const faviconResponse = await axios.get(faviconSrc, { responseType: 'arraybuffer' });

      try {
        // Check if the favicon image is not blank
        if (faviconResponse.data && faviconResponse.data.length > 0) {
          // Resize favicon to 24x24 using sharp
          const resizedFaviconBuffer = await sharp(Buffer.from(faviconResponse.data))
            .resize(24, 24)
            .toBuffer();

          // Save the resized favicon
          fs.writeFileSync(path.join(screenshotsFolderPath, `${site.id}_favicon.png`), resizedFaviconBuffer);
        }
      } catch (error) {
        console.error(`Error processing favicon for ${site.id}:`, error.message);
      }
    }

    await page.close();
  }

  await browser.close();
})();
// Renders resume/resume.html to AaronSimo_Resume.pdf at the site root.
// Run from the repo root: node resume/build.js   (needs: npm i playwright)
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'resume.html'), { waitUntil: 'load' });
  await page.pdf({ path: path.join(__dirname, '..', 'AaronSimo_Resume.pdf'), format: 'Letter', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log('Wrote AaronSimo_Resume.pdf');
})();

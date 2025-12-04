const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  
  // Scroll to scale section
  await page.evaluate(() => {
    document.querySelector('#scale').scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(300);
  
  await page.screenshot({ 
    path: '/tmp/d1f-hex-grid.png',
    fullPage: false
  });
  
  console.log('Screenshot saved');
  await browser.close();
})();

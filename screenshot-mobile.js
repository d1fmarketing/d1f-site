const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
  });
  const page = await context.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  await page.screenshot({ 
    path: '/tmp/d1f-mobile-hero.png',
    fullPage: false
  });
  
  console.log('Screenshot saved to /tmp/d1f-mobile-hero.png');
  await browser.close();
})();

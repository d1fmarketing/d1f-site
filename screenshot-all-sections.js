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
  await page.waitForTimeout(500);

  const sections = [
    { id: 'blueprints', name: 'blueprints' },
    { id: 'observability', name: 'metrics' },
    { id: 'optimization', name: 'cycle' },
    { id: 'governance', name: 'governance' },
    { id: 'stack', name: 'stack' },
    { id: 'contact', name: 'footer' }
  ];

  for (const section of sections) {
    await page.evaluate((id) => {
      document.querySelector(`#${id}`).scrollIntoView({ behavior: 'instant' });
    }, section.id);
    await page.waitForTimeout(300);

    await page.screenshot({
      path: `/tmp/d1f-${section.name}-mobile.png`,
      fullPage: false
    });
    console.log(`Screenshot saved: ${section.name}`);
  }

  await browser.close();
})();

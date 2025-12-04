import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const baseUrl = 'http://localhost:3000';
  
  // Viewports to test
  const viewports = [
    { width: 1440, height: 900, name: '1440x900' },
    { width: 1920, height: 1080, name: '1920x1080' }
  ];
  
  for (const viewport of viewports) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height
    });
    
    console.log(`Taking screenshot at ${viewport.width}x${viewport.height}...`);
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    
    const outputPath = `/tmp/screenshot_${viewport.name}.png`;
    await page.screenshot({ path: outputPath, fullPage: true });
    console.log(`Screenshot saved: ${outputPath}`);
    
    // Also take a viewport-height screenshot (without scroll)
    const viewportPath = `/tmp/screenshot_${viewport.name}_viewport.png`;
    await page.screenshot({ path: viewportPath });
    console.log(`Viewport screenshot saved: ${viewportPath}`);
  }
  
  await browser.close();
  console.log('Done!');
}

takeScreenshots().catch(console.error);

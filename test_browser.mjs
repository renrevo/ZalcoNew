import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Catch console logs
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
    
    await page.goto('http://localhost:5173/');
    await page.setViewport({ width: 1280, height: 800 });
    
    // Wait for canvas to be created
    await page.waitForTimeout(2000);
    
    await page.screenshot({ path: '/tmp/screenshot.png' });
    console.log('Screenshot saved to /tmp/screenshot.png');
    
    await browser.close();
})();

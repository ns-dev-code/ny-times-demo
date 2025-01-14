const puppeteer = require('puppeteer');

const pageUrl = "http://localhost:3001";
describe('NY Times Most Popular Articles E2E Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test('Page title is correct', async () => {
    await page.goto(pageUrl);
    const title = await page.title();
    expect(title).toBe('NY Times Most Popular Articles');
  });

  test('Articles are displayed correctly', async () => {
    await page.goto(pageUrl);

    // Wait for the table to load
    await page.waitForSelector('table tbody tr'); // Wait for at least one article row

    // Check for the presence of article titles
    const articleTitles = await page.$$eval('table tbody tr td:first-child', titles => titles.map(title => title.textContent.trim()));
    expect(articleTitles.length).toBeGreaterThan(0); // Ensure there are articles displayed

    // Check for the presence of bylines
    const bylines = await page.$$eval('table tbody tr td:nth-child(2)', bylines => bylines.map(byline => byline.textContent.trim()));
    expect(bylines.length).toBe(articleTitles.length); // Ensure bylines match the number of articles

    // Check for the presence of published dates
    const publishedDates = await page.$$eval('table tbody tr td:nth-child(3)', dates => dates.map(date => date.textContent.trim()));
    expect(publishedDates.length).toBe(articleTitles.length); // Ensure published dates match the number of articles
  });

  // Add more tests as needed
});

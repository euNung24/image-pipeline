const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://nungblog.com/annual_plan");
  await page.screenshot({ path: "images/nungblog.png" });

  await browser.close();
})();

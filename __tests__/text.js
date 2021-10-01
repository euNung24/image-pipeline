const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });
describe("jest-image-snapshot usage with an image received from puppeteer", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it("works", async () => {
    const page = await browser.newPage();
    const page2 = await browser.newPage();

    await page.goto("https://nungblog.com/board");
    await page2.goto("https://todolist-nung.web.app/");

    const image = await page.screenshot();
    const image2 = await page2.screenshot();

    expect(image).toMatchImageSnapshot();
    expect(image2).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});

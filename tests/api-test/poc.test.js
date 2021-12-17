const { test, expect } = require('@playwright/test')

test('Test google search', async ({ page }) => {
  await page.goto('https://www.google.com/ncr')
  const element = await page.$('[aria-label="Search"]')
  await element.click()
  await element.type('BrowserStack')
  await element.press('Enter')
  const title = await page.title('')
  console.log(title)
})

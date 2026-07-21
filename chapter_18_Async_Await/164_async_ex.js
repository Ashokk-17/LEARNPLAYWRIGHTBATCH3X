import { test, expect } from '@playwright/test'; // pulls in Playwright's test runner and assertion library - only works via `npx playwright test`, not plain node

// Basic Async and Await
async function getTestResult() { // async function - always returns a Promise, even though we just return a plain string
    return "Pass"; // this string becomes the resolved value of the Promise
}

getTestResult().then(function (res) { // call the function to get its Promise, then .then() waits for it to resolve
    console.log(res); // res is the resolved value - prints "Pass"
});

test('has title', async ({ page }) => { // registers a Playwright test named "has title"; { page } is destructured from the fixture object Playwright provides
    await page.goto('https://playwright.dev/'); // wait for navigation to finish before moving on
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/); // assertion - page title must match this regex

    let r = page.locator('text=Get started'); // builds a locator handle for this element - not awaited because locator() itself isn't async
});

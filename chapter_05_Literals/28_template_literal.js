// Template literally. 

let firstname = "Pramod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);


let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Playwright
async function playwrightExamples(page) {
    const rowIndex = 3;
    const columnName = "email";
    await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

    const testCase = "checkout_flow";
    const timestamp = Date.now();
    await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });
}

// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);


const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);
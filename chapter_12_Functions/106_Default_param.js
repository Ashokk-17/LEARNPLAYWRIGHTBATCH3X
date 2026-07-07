// Default parameters: maxRetries and delay are used only if the caller doesn't pass them
function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}


// Uses both defaults -> maxRetries = 3, delay = 1000
retry("Login Test");

// Overrides both defaults -> maxRetries = 5, delay = 2000
retry("Registeration Test", 5, 2000);
// Environment settings for a test run - typical constants block for automation
const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}


// Sample of an expected API response, with a nested body/user object -
// mirrors the shape you'd assert against in a real API test
const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: {
            role: "admin", active: true }
    }
}

// A single config object grouping related settings by comment/section,
// a common real-world pattern instead of separate top-level constants
const config = {
    // Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',

    // Nested object grouping test credentials together
    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123',
    },


     // Logging
    logLevel: 'INFO',

    // Retry configuration
    // Reads from an environment variable, falling back to '3' if unset,
    // then converts the string to a base-10 integer
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};
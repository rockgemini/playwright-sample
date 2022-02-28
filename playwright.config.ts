import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
    retries: 0,
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
    },
    projects:[
        {
            name: 'Chromium',
            use: { browserName: 'chromium'},
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox'},
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit'},
        },
        {
            name: 'UI',
            testMatch: /.*ui-tests.spec.ts/,
            use: { browserName: 'chromium'},
        },
        {
            name: 'API',
            testMatch: /.*api-tests.spec.ts/,
            use: { browserName: 'chromium'},
        }

    ],
}
export default config
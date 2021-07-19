**Prerequisities**

Nodejs stable version should be installed in your machine

**Setup**

1) Clone repo to your local
2) Run command - npm ci

**Running Specific tests**

1. Cross Browser(Chromium, Webkit, Firefox) - npx playwright test TC001_crossbrowsers.spec.js

Mobile Emulation - npx playwright test --config=mobile.config.js TC001_crossbrowsers.spec.js

2. waits - npx playwright test TC002_waits.spec.js --project=DesktopChromium
3. PageEval  - npx playwright test TC003_pageeval.spec.js --project=DesktopChromium
4. Geolocation - npx playwright test TC004_geo.spec.js --config=geo.config.js --timeout 200000                                                                                               works on iPhone11 Webkit.
5. Visual Testing - npx playwright test TC005_visualtesting.spec.js --project=DesktopChromium
6. Playwright Traceviewer- Trace config available in playwright.config.js

npx playwright test TC006_traceviewer.spec.js --project=DesktopChromium

`npx playwright show-trace test-results\tests-TC006_traceviewer-Trace-viewer-test-DesktopChromium\trace.zip`

7. Playwright Inspector

npx playwright test TC007_pwinspector.spec.js --project=DesktopChromium --timeout 200000

**Note:** Make some changes and push to github,it should trigger github actions ci pipeline.

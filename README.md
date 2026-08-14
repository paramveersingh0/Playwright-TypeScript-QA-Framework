# Playwright TypeScript UI & API Automation Framework

A maintainable end-to-end automation framework demonstrating UI/API testing, Page Object Model, fixtures, reusable utilities, tagging, reporting, and GitHub Actions CI/CD.

## Stack
Playwright Test | TypeScript | Node.js | REST APIs | GitHub Actions

## Coverage
**UI:** valid login, locked user, invalid credentials, single/multiple product cart flows.

**API:** GET user/schema validation, negative 404 validation, POST creation and response validation.

## Design
- Page Object Model
- Reusable fixtures and API client
- Externalized test data
- Smoke/regression tags
- Screenshots, video, trace on failure
- Parallel execution and CI retries
- HTML reporting

## Run
```bash
npm install
npx playwright install chromium
npm test
npm run test:smoke
npm run test:api
npm run lint
npm run report
```

## Interview Story
The framework separates test intent from implementation using Page Objects and reusable fixtures, while the API client centralizes service interactions. GitHub Actions performs type checking and the full suite on every push/PR and uploads the Playwright report as an artifact.

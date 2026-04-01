# 30 Days of Playwright

A 30-day challenge to learn and master Playwright for end-to-end testing.

## Description

This project contains Playwright tests created as part of a 30-day learning journey. It includes basic test examples and progressively more complex test scenarios to demonstrate Playwright's capabilities.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd 30days
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Project Structure

```
30days/
├── tests/
│   ├── day1.spec.ts      # Day 1 test scenarios
│   └── example.spec.ts   # Basic Playwright examples
├── playwright-report/    # Test reports (generated after running tests)
├── test-results/         # Test results and screenshots
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies
└── README.md            # This file
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (see browser)

```bash
npx playwright test --headed
```

### Run specific test file

```bash
npx playwright test tests/day1.spec.ts
```

### Run tests and generate report

```bash
npx playwright test --reporter=html
```

### View test report

```bash
npx playwright show-report
```

## Test Scenarios

### Day 1: Basic Interactions

- Navigate to Playwright documentation
- Verify page titles
- Click links and verify navigation
- Login form testing on SauceDemo

### Example Tests

- Basic page navigation
- Link clicking and verification

## Configuration

The project uses Playwright's default configuration with:

- Chromium browser (can be extended to Firefox and WebKit)
- HTML reporting
- Parallel test execution
- Trace collection on first retry

## Learning Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Getting Started with Playwright](https://playwright.dev/docs/intro)

## Contributing

This is a personal learning project, but feel free to:

- Add more test scenarios
- Improve existing tests
- Share your learnings

## License

ISC License

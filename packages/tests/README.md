# End-to-end Tests

This package has all of the E2E tests for SiteRun.

We use [Playwright](https://playwright.dev/) to run the tests.

Tests can be run locally and are run in Github Actions on each push.
See `.github/workflows/playwright-tests.yml`

The Github Actions script can also handle updating screenshots which is configured in `.github/workflows/playwright-approve-snapshots.yml`

## Running tests

```
pnpm test
```

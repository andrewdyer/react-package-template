# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

1. [Development Setup](#development-setup)
2. [Using Yalc for Local Development](#using-yalc-for-local-development)

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Use the correct Node.js version specified in [.nvmrc](.nvmrc):
    - Install `nvm` if you haven't already. Follow the instructions on the [nvm GitHub repository](https://github.com/nvm-sh/nvm).
    - Run `nvm use` to switch to the required Node.js version.
3. Install all project dependencies to ensure a complete setup with `npm install`.
4. Start Storybook using `npm run storybook` to develop and test UI components in isolation.
5. Run tests with `npm test` to verify that the environment is working correctly. You can also use `npm run test:watch` to run the tests in watch mode, and `npm run test:coverage` to generate a coverage report.

## Testing

Please write tests for any new features or modifications to the project. Follow these steps to ensure your tests are effective and consistent:

-   Use `npm run test` to run the tests.
-   Use `npm run test:watch` to run the tests in watch mode, which will re-run tests when files change.
-   Check coverage using `npm run test:coverage` to ensure all tests pass.

For consistency and modularity, organize test code into structured sections:

-   Start by mocking dependencies or libraries.
-   Create helper functions to streamline repetitive logic.
-   Define constants for mock data or configurations.
-   Structure the main test suite using `describe` blocks and focused test cases.

Ensure tests are clear, reusable, and easy to maintain before submitting changes.

## Using Yalc for Local Development

Use Yalc to test this package locally in other projects without publishing it to the npm registry.

1. Install Yalc globally using `npm install yalc -g`.
2. In the target project's directory, add this package with `yalc add @your-scope/react-package-template`.
3. Publish changes to the local Yalc store by running `npm run yalc:publish` in this package's directory.
4. Push updates to the target project with `npm run yalc:push`, which notifies the target project of the latest changes.
5. Alternatively, manually update the package in the target project with `yalc update @your-scope/react-package-template`.

Follow these steps to ensure your changes work as expected before submitting them.

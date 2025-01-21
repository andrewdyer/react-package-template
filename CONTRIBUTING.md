# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

1. [Development Setup](#development-setup)

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Use the correct Node.js version specified in [.nvmrc](.nvmrc):
    - Install `nvm` if you haven't already. Follow the instructions on the [nvm GitHub repository](https://github.com/nvm-sh/nvm).
    - Run `nvm use` to switch to the required Node.js version.
3. Install all project dependencies to ensure a complete setup with `npm install`.
4. Start Storybook using `npm run storybook` to develop and test UI components in isolation.
5. Run tests with `npm test` to verify that the environment is working correctly. You can also use `npm run test:watch` to run the tests in watch mode, and `npm run test:coverage` to generate a coverage report.

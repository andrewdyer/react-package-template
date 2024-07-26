# React Package Template

A template for creating React packages.

## Getting Started

To install this packages use either npm or yarn:

```bash
npm install @your-scope/react-package-template
```

or

```bash
yarn add @your-scope/react-package-template
```

## Local Development

Yalc is a tool for managing local development of npm packages. It allows you to work on this package locally and test it in other projects without publishing to the npm registry.

To use yalc, you need to install it globally on your machine. You can do this using npm:

```bash
npm install yalc -g
```

Once you have installed yalc, you can start publishing and installing this package in a local environment.

### Publishing Your Package

To publish this package with yalc, navigate to the root directory and run the following command:

```bash
yalc publish
```

This will publish the package to a local yalc store and you can now install it in another project using yalc.

### Installing Your Package

To install this package with yalc, navigate to the project directory where you want to use the package and run the following command:

```bash
yalc add @your-scope/react-package-template
```

This will install the package from the local yalc store. You can now use it in the project as you would with any other npm package.

### Updating Your Package

To update this package with yalc, navigate to the package directory, make your changes, and then run the following command to publish the updated package:

```bash
yalc publish --push
```

This will update the package in the local yalc store. To apply these updates in your project, navigate to the project directory and run:

```bash
yalc update @your-scope/react-package-template
```

This will update the installed version of this package in the project.

## Available Scripts

### `npm run build`

Builds production files in your `dist/` folder.

It generates CommonJS, ES Modules, as well as TypeScript declaration files.

### `npm run format`

Formats the code, according to predefined rules in the `package.json`, using the code formatter tool Prettier to you ensure that your code follows a consistent style throughout your project - making it easier to read and maintain.

See the official [Prettier](https://prettier.io) website for more information and docs.

### `npm run storybook`

Runs the Storybook component explorer, a development environment for UI components.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

Storybook allows you to build, test, and showcase your components in isolation, making it easier to develop and iterate on them. It provides a user-friendly interface where you can view and interact with your components in different states and configurations. This helps you ensure that your components are working correctly and visually appealing before integrating them into your application.

See the official [Storybook](https://storybook.js.org) website for more information and docs.

### `npm run build-storybook`

Builds Storybook as a static web application.

This is useful when you want to deploy your Storybook to a static hosting service, or when you want to share your Storybook with others without requiring them to run the Storybook server.

You can provide additional flags to customize the command. Read more about the flag options [here](https://storybook.js.org/docs/api/cli-options).

### `npm run test`

Runs the test suite for the project.

### `npm run yalc:publish`

### `npm run yalc:push`

# Edenspiekermann ESLINT Configuration

This repository contains the ESLINT configuration for projects at [EdenSpiekermann][espi-url].

## Installation

```
$ npm i -D eslint-config-edenspiekermann
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
    "name": "my-javascript-project",
    "eslintConfig": {
        "extends": ["edenspiekermann"]
    }
}
```

Or to `.eslintrc.json`:

```json
{
    "extends": ["edenspiekermann"]
}
```

Depending on how you automate your JS linting you may wish to add a lint task to the scripts block in your `package.json` If this is your preferred setup simply add the following task.

```json
{
    "scripts": {
        "lint": "eslint --fix path/to/your/javascript/**/*.js"
    }
}
```

You can now use this task by running `npm run lint`.

### Core rules

Using `"extends": ["edenspiekermann"]` is a short hand for `"extends": ["edenspiekermann/rules/core"]`. The core rules use extend the [airbnb-base][airbnb-base-config] configuration. It contains all rulesets for a _frameworkless_ / _vanilla js_ validation. On top of that its possible to extend these rules with some more specific configurations (see the following).

### Prettier rules

Add this configuration if you want to use eslint with [prettier][prettier]. For more details read the section _[Integrating with Prettier](./#integrating-with-prettier)_.

```
{
  "extends": [
    "edenspiekermann",
    "edenspiekermann/rules/prettier"
  ]
}
```

### React

Use `"edenspiekermann/rules/react"` and `"edenspiekermann/rules/react-proptypes"` configurations if you want to use eslint with [react][react]. `"edenspiekermann/rules/react"` is mostly a proxy configuration for [airbnb][airbnb-config] configuration. It disables the proptype validation. If you want to re-enable them, you should also add the `"edenspiekermann/rules/react-proptypes"` rules.

```
{
  "extends": [
    "edenspiekermann",
    "edenspiekermann/rules/react",
    "edenspiekermann/rules/react-proptypes",
  ]
}
```

### Jest

Enable `"edenspiekermann/rules/jest"` when using [jest][jest] in your project. It uses the `jest/recommended` and `jest/style` rules.

```
{
  "extends": [
    "edenspiekermann",
    "edenspiekermann/rules/jest"
  ]
}
```

### Typescript

To add typescript support for eslint extend the configuration with `"edenspiekermann/rules/typescript"`. This enabled typescript validation for `*.ts` files. When using typescript with react, you can also add `"edenspiekermann/rules/typescript-react"` which adds jsx support for `*.tsx` files.

## Integrating with Prettier
The config here is actually simply a proxy for Airbnb, prettier and prettier react configurations with a few custom overrides built in. One way you can have this code formatted on save though is through an ESLint integration in your code editor. We use the ESLint plugin for VSCode and this is configured to run on save. The code is then formatted and any errors highlighted in the editor window.

### Installing the ESLint extension in VSCode

* In VSCode you can select `View > Extensions` or `shift + cmd + x` to view the extensions sidebar and search the marketplace for the extension. Install and restart VSCode.

* Next, select ESLint in the list of extensions and you will see the options that must be configured to enable format on save.

* select `Code > preferences > settings` or `cmd + ,` to adjust the ESLint configuration settings listed in the extension's README to format your code on save.

For other editors the instructions are basically the same, install the linting tool, sublime-linter for sublime or linter-eslint for Atom for example, and configure your settings to run and format on save.



## Contributing

When contributing to this repository, please first check the Github issue to see if this has already been raised or assigned. If not feel free to create an issue.

### Pull Request Process

If you wish to submit a pull request please follow these simple steps:

1. Please add some information in the Pull Request description about the proposed changes listing what files are changed and a few lines about why.
3. Increase the version number in the package.json following the [SemVer][semver] versioning scheme
4. Following testing and approval from the ESPI development team we will merge the PR, create a release and publish it to NPM


## Helpful Links

* [eslint shareable configuration][shareable]
* [getting started with eslint][docs]

[shareable]: https://eslint.org/docs/developer-guide/shareable-configs  "Eslint shareable configurations"
[react]: https://reactjs.org  "react JS"
[docs]: https://eslint.org/docs/user-guide/getting-started  "Eslint docs"
[espi-url]: https://www.edenspiekermann.com "EdenSpiekermann Home page"
[semver]: http://semver.org/ "Semantic Versioning for software projects"
[prettier]: https://prettier.io/ "Prettier Home page"
[airbnb-config]: https://www.npmjs.com/package/eslint-config-airbnb "AirBNB Eslint config"
[airbnb-base-config]: https://www.npmjs.com/package/eslint-config-airbnb-base "AirBNB Eslint base config"
[jest]: https://jestjs.io/ "Jest Home page"

# Edenspiekermann ESLINT Configuration

This repository contains the ESLINT configuration for linting [React][react] projects at [EdenSpiekermann.][espi-url]

## Installation

```
$ npm install --save-dev eslint-config-edenspiekermann
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
    "name": "my-javascript-project",
    "eslintConfig": {
        "extends": "edenspiekermann"
    }
}
```

Or to `.eslintrc`:

```json
{
    "extends": "edenspiekermann"
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
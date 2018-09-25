# Edenspiekermann ESLINT Configuration

This repository contains the ESLINT configuration for linting JavaScript projects at ESPI.

## Use it in your project
* add espi-eslint-config to your `package.json` as a dependency
`"eslint-config-edenspiekermann": "git+https://YOUR-GIT-OAUTH-Token:x-oauth-basic@github.com/edenspiekermann/espi-eslint-config.git#master"`
Run `npm install` after you added it.

* add a lint script to your `package.json` 
`"lint": "eslint --fix src/**/*.js src/**/*.jsx"`

* add the `eslintConfig` to your `package.json`: 
`"eslintConfig": {
    "extends": "eslint-config-edenspiekermann"
 },`
 
Use it with `npm run lint`. 

## How to develop the repository

It is just plain JavaScript at the moment. Everything export from `index.js` represents the configuration settings we wish apply across the suite of applications.

## Helpful Links

* [eslint shareable configuration][shareable]
* [getting started with eslint][docs]

[shareable]: https://eslint.org/docs/developer-guide/shareable-configs  "Eslint shareable configurations"
[docs]: https://eslint.org/docs/user-guide/getting-started  "Eslint docs"

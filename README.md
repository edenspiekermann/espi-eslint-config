# Champ - Oyez ESLINT Configuration

This repository contains the ESLINT configuration for linting JavaScript projects in the Oyez suite of products.

## How to add this configuration to your project

There is a generic oyez-ro user that has been created. This user has an OAuth key and has been granted access to this repo. So you will need to acquire this key from the repo admin to install the package from an npm job.

Then add the following to your project's `package.json`
git+https://<oyez-ro-oauth-key>:x-oauth-basic@github.com/lovelysystems/oyez-eslint-config.git#master

then run

```js
$ npm install
```

Next you will need to add an ESLint config section to either your `package.json` as follows:

```json
{
  "eslintConfig": {
    "extends": "@oyez/eslint-config-oyez"
  }
}
```

Or to your `.eslintrc`:

```json
{
  "extends": "@oyez/eslint-config-oyez"
}
```

## How to develop the repository

It is just plain JavaScript at the moment. Everything export from `index.js` represents the configuration settings we wish apply across the suite of applications.

## Helpful Links

* [eslint shareable configuration][shareable]
* [getting started with eslint][docs]

[shareable]: https://eslint.org/docs/developer-guide/shareable-configs  "Eslint shareable configurations"
[docs]: https://eslint.org/docs/user-guide/getting-started  "Eslint docs"
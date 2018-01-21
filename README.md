# Vue/Vuex Modular Dashboard

A Vue/Vuex dashboard featuring a module that let's insurers define their own custom inputs for any type of insurance.

## Architecture

Following a feature based modular approach to isolating code into namespaced directories

### File Structure

Initial concept:

```
src/ # Client source (can also be named `client`, `web`, or `app`)
  modules/ # Contains feature based modules
    module/ # Name of Module (i.e. `field` or `graph`)
      _api/ # Module's Data service layer
      _components # Module's Vue components
      _store # Module's Vuex Store files
  router/ # Router files
  store/ # Vuex Store files
  theme/ # Unified Theme files (SASS, Vue, etc...)
  views/ # Views files used by Router
```

## Dependenices

* vue
* vue-router
* vue-styled-components
* vuex

### Dev Dependencies

> More details to come...

## Setup

### Development

Install your dependencies with `npm install` and then run `npm run dev` or `npm run start` to start a development sever.

```
npm install
npm run dev
```

### Production

Basic instructions:

```
npm install
npm run build
```

### Testing

> Work in progress...

## ESLint

Code linting with `xo` package, configure in `package.json`. [See docs for more info](https://github.com/sindresorhus/xo).

To configure esling, edit file `.eslintrc` in root directory. Here's an example config in JSON format:

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.base.conf.js"
      }
    }
  },
  // add custom rules here
  "rules": {
    "import/no-unresolved": 0,
    "import/no-unassigned-import": 0,
    // allow optional dependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        "optionalDependencies": [
          "test/unit/index.js"
        ]
      }
    ],
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        "js": "never",
        "vue": "never"
      }
    ],
    // don't reassign declared function params
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state"
        ]
      }
    ]
  }
}
```

See docs for [configuring ESLint](https://eslint.org/docs/user-guide/configuring) to modify config as needed.

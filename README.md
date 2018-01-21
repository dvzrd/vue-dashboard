# Vue/Vuex Modular Dashboard

A Vue/Vuex dashboard featuring a module that let's insurers define their own custom inputs for any type of insurance.

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

## Dependenices

* vue
* vue-router
* vue-styled-components
* vuex

### Dev Dependencies

> More details to come...

## Architecture

Following a feature based modular approach by isolating code into namespaced directories and connecting module containers to vue router views. This way each module feature contains it's own internal code with logic and presentation organized seperately using Vuex and Styled-Components.

### File Structure

This is a high level outline of the file structure, for a more detailed look into each of these files - refer to the ##Documentation below and/or read the comments sprinkled throughout the code.

```bash
├── build                                       # build files for app
│    ├── build.js                               # main build file for app
│    ├── check-versions.js                      # tool for verifying current node version
│    ├── dev-client.js                          # webpack dev client
│    ├── dev-server.js                          # webpack dev server
│    ├── utils.js                               # build utility functions - examples: style-loader
│    ├── vue-loader.js                          # config for vue-loader
│    ├── webpack.base.js                        # base webpack config
│    ├── webpack.dev.js                         # dev webpack config
│    └── webpack.prod.js                        # prod webpack config
├── config                                      # configs and other scripts
│    ├── env.dev.js                             # dev environment config
│    ├── env.prod.js                            # prod environment config
│    └── index.js                               # webpack config module
├── node_modules                                # node dependencies - reference ##Dependencies for details
├── src                                         # source code for client-side app - alt names: client, app
│    ├── components                             # contains common app components - examples: hero, sidebar, graph
│    ├── modules                                # contains all modules for app
│    |    └── module_namespace                  # name of module by feature - examples: commercial_property
|    |         ├── _api                         # separate data service layer for module
|    |         |    └── index.js                # simulated get/fetch response for data
|    |         ├── _components                  # vue components for module
|    |         |    ├── data_edges_node.vue     # vue component for data node item
|    |         |    └── data_edges.vue          # vue component for data edges list
|    |         ├── _store                       # vuex store files for module
|    |         |    ├── actions.js              # ui and api actions for module
|    |         |    ├── getters.js              # ui and api getters for module
|    |         |    ├── index.js                # main store exports for module
|    |         |    └── mutations.js            # ui and api mutations for module
|    |         └── index.vue                    # vue components container for module
|    ├── router                                 # vue router files
|    |    └── index.js                          # main router config
|    ├── store                                  # vuex store files
|    |    └── index.js                          # main vuex store config
|    ├── theme                                  # main theme files to unify design for app
|    ├── views                                  # vue templates for router views
|    |    └── index.vue                         # home view index route
|    ├── app.vue                                # main vue template for app
│    └── index.js                               # core app definition using app template
├── static                                      # directory for static files and assets
│    └── favicon.ico                            # favicon for app
├── tests                                       # tests with karma and mocha - more info to come...
├── index.html                                  # main html document to render app
└── package.json                                # package info
```

## Documentation

### Styled Components and Theme

> More details to come...

### Vuex Modules and Store

> More details to come...

### Vue Router and Views

> More details to come...

### ESLint

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

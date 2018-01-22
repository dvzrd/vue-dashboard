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
│    ├── api                                    # separate data service layer for app
|    |    └── index.js                          # simulated get/fetch response with static data
│    ├── components                             # contains common app components - examples: hero, footer
|    |    └── component_namespace.vue           # name of vue component - examples: sidebar
│    ├── modules                                # contains all modules for app
│    |    └── module_namespace                  # name of module by feature - examples: commercial_property
|    |         ├── _api                         # separate data service layer for module
|    |         |    └── index.js                # simulated get/fetch response with static data
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
|    |    └── index.js                          # main store exports for app
|    ├── theme                                  # main theme files to unify design for app
|    |    ├── core                              # global core theme styles
|    |    |    ├── _action.scss                 # theme styles for action elements
|    |    |    ├── _animate.scss                # theme animation keyframes
|    |    |    ├── _container.scss              # theme styles for container elements
|    |    |    ├── _context.scss                # theme styles for content/text elements
|    |    |    ├── _heading.scss                # theme styles for heading elements
|    |    |    ├── _layout.scss                 # theme styles for layout
|    |    |    ├── _media.scss                  # theme styles for media elements
|    |    |    ├── _normalize.scss              # normalize styles for theme
|    |    |    ├── _print.scss                  # theme print styles
|    |    |    ├── _template.scss               # theme styles for template
|    |    |    ├── _typography.scss             # theme typography
|    |    |    ├── _view.scss                   # theme styles for view
|    |    |    ├── _wrapper.scss                # theme styles for wrapper elements
|    |    |    └── core.scss                    # import core files for export
|    |    ├── fonts                             # local fonts to import into theme typography
|    |    ├── vendor                            # vendor stylesheets and variables
|    |    ├── _patches.scss                     # global style overrides
|    |    ├── _variables.scss                   # global variable overrides
|    |    └── inject.scss                       # theme injection of global styles
|    ├── views                                  # vue templates for router views
|    |    └── index.vue                         # home view index route
|    ├── app.vue                                # main vue template for app
│    └── index.js                               # core app definition using app template
├── static                                      # directory for static files and assets
|    ├── favicon.ico                            # favicon for app index
│    └── logo.png                               # logo for app header
├── tests                                       # tests with karma and mocha - more info to come...
├── index.html                                  # main html document to render app
└── package.json                                # package info for app
```

## Documentation

### Design System and Theme Provider

**Design System with SASS**

Theme directory contains the fonts, utilities, variables and global styles for the app.

> More details to come...

**Theme Provider concept with Vue and Vuex**

> More details to come...

### Modules and Store

**Field Types Module**

Isolating all code related to field types into a single module for faster access and scalability.

> More details to come...

### Router and Views

Using `vue-router` to define namespaced `views`.

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

## References

As a realtive newcomer to Vue, I had to do a lot of research on scalable file strucures, useful utilities and libraries. Here are some of the references I used to build this project.

### Vue / Vuex
* [Vue 2 Styleguide](https://vuejs.org/v2/style-guide/)
* [Programmatic Navigation with Vue Router](https://router.vuejs.org/en/essentials/navigation.html)
* [Vuex Core Concepts](https://vuex.vuejs.org/en/core-concepts.html)
* [Using SASS/SCSS in Vue.js 2](https://medium.com/@mahesh.ks/using-sass-scss-in-vue-js-2-d472af0facf9)

### Architecture
* [Large-scale Vuex application structures](https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f)
* [How to construct a design system](https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117)

### Testing
* [Vue.js Unit Testing with Karma and Mocha](https://alligator.io/vuejs/unit-testing-karma-mocha/)
* [Unit Testing Vue.js Components with the Official Vue Testing Tools and Jest](https://alexjoverm.github.io/series/Unit-Testing-Vue-js-Components-with-the-Official-Vue-Testing-Tools-and-Jest/)
* [A modern way to do E2E testing for Vue.js apps](https://hackernoon.com/a-modern-way-to-do-e2e-testing-for-vue-js-apps-cebe0a07499c)

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
│    ├── components                             # contains common app components - examples: hero, footer
|    |    └── component_namespace.vue           # name of vue component - examples: sidebar
│    ├── modules                                # contains all modules for app
│    |    └── module_namespace                  # name of module by feature - examples: commercial_property
|    |         ├── _api                         # separate data service layer for module
|    |         |    └── index.js                # simulated get/fetch response with static data
|    |         ├── _components                  # contains vue child components for module
|    |         |    └── module_component.vue    # private vue component used by module - examples: menu-list, menu-item
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
|    |    |    ├── _animate.scss                # theme keyframes for animations
|    |    |    ├── _button.scss                 # theme styles for button components
|    |    |    ├── _layout.scss                 # theme styles for layout wrapper
|    |    |    ├── _normalize.scss              # normalize global document styles for app
|    |    |    ├── _print.scss                  # theme print styles
|    |    |    ├── _typography.scss             # theme typography styles
|    |    |    └── core.scss                    # import core files for export
|    |    ├── fonts                             # source fonts to import into theme typography
|    |    ├── vendor                            # source vendor stylesheets and variables
|    |    ├── _patches.scss                     # global style overrides
|    |    ├── _variables.scss                   # global variable overrides
|    |    ├── composition.scss                  # design compositin variables for theme
|    |    ├── content.scss                      # design content variables for theme
|    |    ├── palette.scss                      # color palette variables for theme
|    |    ├── structure.scss                    # design structure variables for theme
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

## Development Notes

### Known Issues

* Passing config prop to containers in module logs undefined in console but the passed data still renders. This is most likely an issue with the time out that simulates the api.
  * Need to add async middleware layer to pass props to module containers - look for a `thunk` library for `vuex`.
  * This can be resolved by refactoring the structure of the module - read Optimzation Concepts below for more details.
  * content hardcoded for this example since this issue is low priority.

### MVP Goals

* Create Field Module 
  * Field Types Container
    * ~~List field types data fetched from module api~~
    * Filter fields by type using value of `type` key
    * Store selected type `id` to module state
  * Field Details Container
    * Connect Form to other containers
    * Display Label input creates value for Reference Name on blur
    * Custom Validation Field
      * Store input value to store if valid regex
  * Field Groups Container
    * List field groups data fetched from module api
    * Store selected group `id` to module state
    * Action to create new group
      * create new object to field groups array using data from other containers
  * Form Actions
    * Save Changes - store all module data to state
    * Cancel Changes - reset store to default state
    * Delete Input - remove this input from store

### Optimization Goals

#### Add GraphQL to handle data flow between client and server

Connect module data mutations with GraphQL layer to pass data from client storage to a collection on the server.

* Look into `apollo-vue` and other solutions using GraphQL, Vue and Vuex.
* Look into middleware solutions using Vue and Vuex and GraphQL to create async data requests.

#### Connect modular components, containers and views under core theme

Need to recycle a bunch of repeating code - specifically flex-box rules shared by the dashboard and other modules.

* Create SASS Mixins and Utilities for theme
* Merge repeating/shared styles into global styles inside theme.
* Refactor classnames to closely resemble component heirarchy merged with global dashboard styles.
* Create core config provider to serve data to dashboard client and filter it according to route and store state - use `vue-router` and `vue`
  * Look into Feature Concepts below for more details.
* Consider sourcing a dashboard library/framework from a vendor and then layer custom code.
  * An ideal solution would be to take only the necessary ui components to keep load times small or integrate them into core - my preference is to build ui components as needed and refactor them later this is why I didn't use bootstrap or other libraries.
  * Some dashboards to reference: [Core UI](https://github.com/mrholek/CoreUI-Vue), [Vue Paper](https://github.com/cristijora/vue-paper-dashboard)

#### Refactor Dashboard Module

Find a way to make dashboard module a global wrapper that can control all the smaller modules, like `create-field`.

* Look into `vue` and `vuex` architecture solutions if any were already suggested, specifically dealing with dashboards or large applications.
* Look into creating modular global components that can be used by smaller modules - in this case, modules share header, sidebar, main section, and footer. Find a way to recycle these components and only extend them when necessary for each relative module.

#### Refactor Create Field Module

Refactor `create-field` to function as a wrapper to connect containers that share data to each other. Break up containers into seperate modules that have their own api and store.

* Look into `vuex` to connect components with props to share information between store.
* Create a global store - this can be the refactored dashboard module. This can be called `core` since the namespace of the project is already dashboard.

### Feature Concepts

#### Layout Provider

Create a layout provider to serve different layouts - in some cases views don't need to live in the dashboard.

* Look into `vue-router` and `vuex` to handle this on the client
* Look into using `webpack` to handle this on the server

#### Theme Provider

Create a theme provider to inject configured theme styles into the layout

* Look into `styled-componets` to see how this was accomplished with react.
* Look into `vue-styled-components` to resolve open issue regarding [ThemeProvider](https://github.com/styled-components/vue-styled-components/issues/26)


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

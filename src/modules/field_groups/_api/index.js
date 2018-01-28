/**
 * fetchConfig - fetch object used to configure create-field module display settings
 */
const fetchConfig = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 'field-groups', // id of field-groups module
      parent: 'create-field', // parent module
      pattern: 'sidebar', // design pattern for dashboard
      name: 'Field Groups', // name of field-groups module - used in create-field sidebar
      hint: 'Choose a group for this field', // hint for sidebar interaction in create-field module
      cta: 'Create New Group' // label for call to action in sidebar
    });
  }, 250);
});

/**
 * fetchFieldGroups - fetch array used to render field-groups-list data
 */
const fetchFieldGroups = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-group-rvcp',
        name: 'Rental Vehicle Coverage Package',
        inputCount: 7
      }
    ]);
  }, 500);
});

// export available field-groups api calls
export default {
  fetchConfig,
  fetchFieldGroups
};

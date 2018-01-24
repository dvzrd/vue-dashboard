/**
 * fetchConfig - fetch object used to configure create-field module display settings
 */
const fetchConfig = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 'create-field', // id of create-field module for breadcrumbs
      root: 'commercial-property', // id of main dashboard view for breadcrumbs
      topbar: {
        id: 'create-field-topbar', // id of topbar for create-field module
        heading: 'Commercial Property' // heading of main dashboard view
      },
      toolbar: {
        id: 'field-types', // id of toolbar for create-field module
        heading: 'Field Types', // name of toolbar in create-field module
        filter: {
          icon: true, // show filter icon
          placeholder: 'Filter by field type' // configure filter placeholder
        }
      },
      sidebar: {
        id: 'field-groups', // id of sidebar for create-field module
        heading: 'Field Groups', // name of sidebar in create-field module
        desc: 'Choose a group for this field', // description of sidebar in create-field module
        cta: 'Create New Group' // label for call to action in sidebar
      },
      footer: {
        id: 'create-field-footer' // id for create-field footer
      }
    });
  }, 250);
});

/**
 * fetchFieldTypes - fetch array used to render field-types data
 */
const fetchFieldTypes = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-type-text',
        type: 'text',
        desc: 'String of text',
        default: 'Free-form text input',
      },
      {
        id: 'field-type-date',
        type: 'date',
        desc: 'Standard ISO format date',
        default: 'Datepicker, with configurable format',
      },
      {
        id: 'field-type-number',
        type: 'number',
        desc: 'String of number(s)',
        default: 'Quantity, limit or ID inputs',
      },
      {
        id: 'field-type-currency',
        type: 'currency',
        desc: 'Standard currency format options',
        default: 'Expenses or Estimated Value inputs',
      }
    ]);
  }, 500);
});

// export available create-field api calls
export default {
  fetchConfig,
  fetchFieldTypes
};

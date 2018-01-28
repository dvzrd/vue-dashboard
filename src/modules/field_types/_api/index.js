/**
 * fetchConfig - fetch object used to configure create-field module display settings
 */
const fetchConfig = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 'field-types', // id of field-types module
      parent: 'create-field', // parent module
      pattern: 'toolbar', // design pattern for dashboard
      name: 'Field Types', // name of field-types module - used in create-field toolbar
      filter: true // show or hide field types filter
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
        name: 'Text',
        icon: 'fa-header',
        desc: 'String of text',
        default: 'Free-form text input',
      },
      {
        id: 'field-type-date',
        type: 'date',
        name: 'Date',
        icon: 'fa-calendar',
        desc: 'Standard ISO format date',
        default: 'Datepicker, with configurable format',
      },
      {
        id: 'field-type-vin',
        type: 'vin',
        name: 'VIN',
        icon: 'fa-car',
        desc: 'Vehicle Identification Number',
        default: 'Free form text input',
      },
      {
        id: 'field-type-number',
        type: 'number',
        name: 'Number',
        icon: 'fa-sort',
        desc: 'String of number(s)',
        default: 'Quantity, limit or ID inputs',
      },
      {
        id: 'field-type-currency',
        type: 'currency',
        name: 'Currency',
        icon: 'fa-money',
        desc: 'Standard currency format options',
        default: 'Expenses or Estimated Value inputs',
      }
    ]);
  }, 500);
});

// export available field-types api calls
export default {
  fetchConfig,
  fetchFieldTypes
};


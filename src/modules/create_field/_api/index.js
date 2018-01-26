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
        name: 'Commercial Property' // heading of main content for dashboard view
      },
      toolbar: {
        id: 'field-types', // id of toolbar for create-field module
        name: 'Field Types', // heading of toolbar in create-field module
      },
      main: {
        id: 'field-details', // id of main for create-field module
        name: 'Field Details' // heading of main content for module
      },
      sidebar: {
        id: 'field-groups', // id of sidebar for create-field module
        name: 'Field Groups', // heading of sidebar content in create-field module
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
        icon: 'fa-header',
        desc: 'String of text',
        default: 'Free-form text input',
      },
      {
        id: 'field-type-date',
        type: 'date',
        icon: 'fa-calendar',
        desc: 'Standard ISO format date',
        default: 'Datepicker, with configurable format',
      },
      {
        id: 'field-type-vin',
        type: 'vin',
        icon: 'fa-car',
        desc: 'Vehicle Identification Number',
        default: 'Free form text input',
      },
      {
        id: 'field-type-number',
        type: 'number',
        icon: 'fa-sort',
        desc: 'String of number(s)',
        default: 'Quantity, limit or ID inputs',
      },
      {
        id: 'field-type-currency',
        type: 'currency',
        icon: 'fa-money',
        desc: 'Standard currency format options',
        default: 'Expenses or Estimated Value inputs',
      }
    ]);
  }, 500);
});

/**
 * fetchFieldDetails - fetch array used to render field-details data
 */
const fetchFieldDetails = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-details-label',
        name: 'display-label',
        label: 'Display Label',
        legend: 'For display purposes, spaces allowed',
        required: true,
        error: 'Please provide a display label for the field'
      },
      {
        id: 'field-details-ref',
        name: 'reference-name',
        label: 'Reference Name',
        legend: 'Used to reference in calculations, no spaces allowed',
        required: true,
        error: 'Please provide a reference name for the field'
      },
      {
        id: 'field-details-value',
        name: 'default-value',
        label: 'Default Value'
      },
      {
        id: 'field-details-regex',
        name: 'custom-validation',
        label: 'Custom Validation',
        legend: 'Any regex pattern can be used for custom validation'
      }
    ]);
  }, 500);
});

/**
 * fetchFieldTags - fetch array used to render field-tags data
 */
const fetchFieldTags = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-tag-vin',
        name: 'VIN',
        groups: [
          'Vinmaster',
          'ISO'
        ]
      },
      {
        id: 'field-tag-date',
        name: 'Date',
        groups: [
          'Calendar',
          'Timepicker'
        ]
      },
      {
        id: 'field-tag-some-tag',
        name: 'Some Tag',
        groups: [
          'Some Tag Group',
          'Tag 3'
        ]
      }
    ]);
  }, 500);
});

/**
 * fetchFieldGroups - fetch array used to render field-groups data
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

// export available create-field api calls
export default {
  fetchConfig,
  fetchFieldTypes,
  fetchFieldDetails,
  fetchFieldTags,
  fetchFieldGroups
};

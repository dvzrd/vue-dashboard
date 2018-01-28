/**
 * fetchConfig - fetch object used to configure create-field module display settings
 */
const fetchConfig = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 'create-field', // id of create-field module for breadcrumbs
      root: 'commercial-property', // id of main dashboard view for breadcrumbs
      // TODO: refactor below object keys to strings
      topbar: {
        id: 'create-field-topbar', // id of topbar for create-field module
        name: 'Add Field' // heading of create-field module for dashboard view
      },
      main: {
        id: 'field-details', // id of main for create-field module
        name: 'Field Details' // heading of main content for module
      },
      footer: {
        id: 'create-field-footer' // id for create-field footer
      }
    });
  }, 250);
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
        action: true,
        required: true,
        error: 'Please provide a display label for the field'
      },
      {
        id: 'field-details-ref',
        name: 'reference-name',
        label: 'Reference Name',
        legend: 'Used to reference in calculations, no spaces allowed',
        model: true,
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
        action: true,
        legend: 'Any regex pattern can be used for custom validation',
        error: 'This is not a valid regex string'
      }
    ]);
  }, 500);
});

// export available create-field api calls
export default {
  fetchConfig,
  fetchFieldDetails
};

/**
 * fetchConfig - fetch object used to configure create-field module display settings
 */
const fetchConfig = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 'field-tags', // id of field-tags module
      parent: 'create-field', // parent module
      pattern: 'tags', // design pattern for dashboard
      name: 'Tags', // name of field-tags module - used in create-field main
      caption: 'Tag Groups', // name of field-tags caption - used in field-tags-groups list
      hint: 'Select a group to see individual tags', // hint for tags interaction in create-field module
    });
  }, 250);
});


/**
 * fetchFieldTags - fetch array used to render field-tags-list data
 */
const fetchFieldTags = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-tag-vin',
        name: 'VIN',
        groups: [
          'field-tag-group-vinmaster',
          'field-tag-group-iso'
        ]
      },
      {
        id: 'field-tag-date',
        name: 'Date',
        groups: [
          'field-tag-group-calendar',
          'field-tag-group-timepicker'
        ]
      },
      {
        id: 'field-tag-some-tag',
        name: 'Some Tag',
        groups: [
          'field-tag-group-some-tag-group'
        ]
      },
      {
        id: 'field-tag-tag-3',
        name: 'Tag 3',
        groups: [
          'field-tag-group-some-tag-group'
        ]
      }
    ]);
  }, 500);
});

/**
 * fetchFieldTagGroups - fetch array used to render field-tags-group-list data
 */
const fetchFieldTagsGroups = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-tag-group-vinmaster',
        name: 'Vinmaster',
        tags: [
          'field-tag-vin',
        ]
      },
      {
        id: 'field-tag-group-iso',
        name: 'ISO',
        tags: [
          'field-tag-vin'
        ]
      },
      {
        id: 'field-tag-group-calendar',
        name: 'Calendar',
        tags: [
          'field-tag-date'
        ]
      },
      {
        id: 'field-tag-group-timepicker',
        name: 'Timepicker',
        tags: [
          'field-tag-date'
        ]
      },
      {
        id: 'field-tag-group-some-tag-group',
        name: 'Some Tag Group',
        tags: [
          'field-tag-some-tag',
          'field-tag-tag-3'
        ]
      }
    ]);
  }, 500);
});

// export available field-tags api calls
export default {
  fetchConfig,
  fetchFieldTags,
  fetchFieldTagsGroups
};

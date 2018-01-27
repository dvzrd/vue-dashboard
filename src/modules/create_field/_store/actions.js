import api from '../_api';

/**
 * getConfig - commit create-field config fetched from api to store
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getConfig = context =>
  api.fetchConfig
    .then(response => {
      context.commit('CREATE_FIELD_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

/**
 * getFieldTypes - commit field-types data fetched from api
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getFieldTypes = context =>
  api.fetchFieldTypes
    .then(response => {
      context.commit('FIELD_TYPES_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

/**
 * filterByType - filter fields array by object's type key
 *
 * @param {Array} fields - array of fields used to filter by type
 * @param {String} type - string value used to filter array by matching against type key
 */
const filterByType = (fields, type) =>
  !type ? fields : fields.filter(field => field.type == type);

/**
 * setSelectedFieldType - commit selectedFieldType value to store on setSelectedFieldType action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const setSelectedFieldType = (context, fieldTypeId) =>
  context.commit('SELECTED_FIELD_TYPE_UPDATED', fieldTypeId);

/**
 * getFieldDetails - commit field-details data fetched from api
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getFieldDetails = context =>
  api.fetchFieldDetails
    .then(response => {
      context.commit('FIELD_DETAILS_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

/**
 * getFieldTags - commit field-tags data fetched from api
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getFieldTags = context =>
  api.fetchFieldTags
    .then(response => {
      context.commit('FIELD_TAGS_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

/**
 * getFieldGroups - commit field-groups data fetched from api
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getFieldGroups = context =>
  api.fetchFieldGroups
    .then(response => {
      context.commit('FIELD_GROUPS_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

// export available create-field actions for container
export default {
  getConfig,
  getFieldTypes,
  filterByType,
  setSelectedFieldType,
  getFieldDetails,
  getFieldTags,
  getFieldGroups
};

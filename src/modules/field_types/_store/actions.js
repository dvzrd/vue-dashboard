import api from '../_api';

/**
 * getConfig - commit field-types config fetched from api to store
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getConfig = context =>
  api.fetchConfig
    .then(response => {
      context.commit('FIELD_TYPES_CONFIG_UPDATED', response);
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
 * filterByType - filter fieldTypes array by object's type key
 *
 * @param {Array} fieldTypes - array of fieldTypes used to filter by type
 * @param {String} type - string value used to filter array by matching against type key
 */
const filterByType = (fieldTypes, type) =>
  !type ? fieldTypes : fieldTypes.filter(field => field.type == type);

/**
 * selectFieldType - commit selected fieldTypeId to store with selectFieldType action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const selectFieldType = (context, fieldTypeId) =>
  context.commit('SELECTED_FIELD_TYPE_UPDATED', fieldTypeId);

// export available create-field actions for container
export default {
  getConfig,
  getFieldTypes,
  filterByType,
  selectFieldType
};

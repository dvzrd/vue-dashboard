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

// export available create-field actions for container
export default {
  getConfig,
  getFieldTypes
};

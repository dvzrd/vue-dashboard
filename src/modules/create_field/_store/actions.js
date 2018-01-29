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
 * setFieldReferenceName - commit fieldReferenceName to store with setFieldReferenceName action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const setFieldReferenceName = (context, fieldReferenceName) =>
  context.commit('FIELD_REFERENCE_NAME_UPDATED', fieldReferenceName);

// export available create-field actions for container
export default {
  getConfig,
  getFieldDetails,
  setFieldReferenceName
};

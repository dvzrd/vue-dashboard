import api from '../_api';

/**
 * getConfig - commit field-groups config fetched from api to store
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getConfig = context =>
  api.fetchConfig
    .then(response => {
      context.commit('FIELD_GROUPS_CONFIG_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });


/**
 * getFieldGroups - commit field-groups list data fetched from api
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

/**
 * selectFieldGroup - commit selected fieldGroupId to store with selectFieldGroup action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const selectFieldGroup = (context, fieldGroupId) =>
  context.commit('SELECTED_FIELD_GROUP_UPDATED', fieldGroupId);


// export available field-groups actions for container
export default {
  getConfig,
  getFieldGroups,
  selectFieldGroup
};

import api from '../_api';

/**
 * getConfig - commit field-tags config fetched from api to store
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getConfig = context =>
  api.fetchConfig
    .then(response => {
      context.commit('FIELD_TAGS_CONFIG_UPDATED', response);
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
 * getFieldTagsGroup - commit field-tags-groups data fetched from api
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getFieldTagsGroups = context =>
api.fetchFieldTagsGroups
  .then(response => {
    context.commit('FIELD_TAGS_GROUPS_UPDATED', response);
  })
  .catch(error => {
    /* eslint-disable-next-line */
    console.error(error);
  });

/**
 * selectFieldTagsGroup - commit selected fieldTagsGroupId to store with selectFieldTagsGroup action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const selectFieldTagsGroup = (context, fieldTagsGroupId) =>
  context.commit('SELECTED_FIELD_TAGS_GROUP_UPDATED', fieldTagsGroupId);

// export available field-tags actions for container
export default {
  getConfig,
  getFieldTags,
  getFieldTagsGroups,
  selectFieldTagsGroup
};

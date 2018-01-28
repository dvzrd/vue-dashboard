/**
 * FIELD_TAGS_CONFIG_UPDATED - object type for mutating field-tags module config state
 *
 * @param {Object} state - stored module state object
 * @param {Object} config - module config data mapped to state
 */
const FIELD_TAGS_CONFIG_UPDATED = (state, config) => {
  state.config = config;
};

/**
 * FIELD_TAGS_UPDATED - object type for mutating field-tags module fieldTags state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTags - module fieldTags data mapped to state
 */
const FIELD_TAGS_UPDATED = (state, fieldTags) => {
  state.fieldTags = fieldTags;
};

/**
 * FIELD_TAGS_GROUPS_UPDATED - object type for mutating field-tags module fieldTagsGroups state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTagsGroups - module fieldTagsGroups data mapped to state
 */
const FIELD_TAGS_GROUPS_UPDATED = (state, fieldTagsGroups) => {
  state.fieldTagsGroups = fieldTagsGroups;
};

/**
 * SELECTED_FIELD_TAGS_GROUP_UPDATED - object type for mutating field-tags module selectedFieldTagsGroup state
 *
 * @param {Object} state - stored module state object
 * @param {String} selectedFieldTagsGroup - module selectedFieldTagsGroup data mapped to state
 */
const SELECTED_FIELD_TAGS_GROUP_UPDATED = (state, selectedFieldTagsGroup) => {
  state.selectedFieldTagsGroup = selectedFieldTagsGroup
};

// export available field-tags module state mutations
export default {
  FIELD_TAGS_CONFIG_UPDATED,
  FIELD_TAGS_UPDATED,
  FIELD_TAGS_GROUPS_UPDATED,
  SELECTED_FIELD_TAGS_GROUP_UPDATED
};

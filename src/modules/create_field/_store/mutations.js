/**
 * CREATE_FIELD_UPDATED - object type for mutating create-field module state
 *
 * @param {Object} state - stored module state object
 * @param {Object} config - module config data mapped to state
 */
const CREATE_FIELD_UPDATED = (state, config) => {
  state.config = config;
};

/**
 * FIELD_DETAILS_UPDATED - object type for mutating create-field module fieldDetails state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldDetails - module fieldDetails data mapped to state
 */
const FIELD_DETAILS_UPDATED = (state, fieldDetails) => {
  state.fieldDetails = fieldDetails;
};

/**
 * FIELD_TAGS_UPDATED - object type for mutating create-field module fieldTags state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTags - module fieldTags data mapped to state
 */
const FIELD_TAGS_UPDATED = (state, fieldTags) => {
  state.fieldTags = fieldTags;
};

/**
 * SELECTED_TAG_GROUP_UPDATED - object type for mutating create-field module selectedTagGroup state
 *
 * @param {Object} state - stored module state object
 * @param {String} selectedTagGroup - module selectedTagGroup data mapped to state
 */
const SELECTED_TAG_GROUP_UPDATED = (state, selectedTagGroup) => {
  state.selectedTagGroup = selectedTagGroup
};

// export available create-field module state mutations
export default {
  CREATE_FIELD_UPDATED,
  FIELD_DETAILS_UPDATED,
  FIELD_TAGS_UPDATED,
  SELECTED_TAG_GROUP_UPDATED
};

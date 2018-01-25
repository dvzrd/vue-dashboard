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
 * FIELD_TYPES_UPDATED - object type for mutating create-field module fieldTypes state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTypes - module fieldTypes data mapped to state
 */
const FIELD_TYPES_UPDATED = (state, fieldTypes) => {
  state.fieldTypes = fieldTypes;
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
 * FIELD_GROUPS_UPDATED - object type for mutating create-field module fieldGroups state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldGroups - module fieldGroups data mapped to state
 */
const FIELD_GROUPS_UPDATED = (state, fieldGroups) => {
  state.fieldGroups = fieldGroups;
};

// export available create-field module state mutations
export default {
  CREATE_FIELD_UPDATED,
  FIELD_TYPES_UPDATED,
  FIELD_DETAILS_UPDATED,
  FIELD_TAGS_UPDATED,
  FIELD_GROUPS_UPDATED
};

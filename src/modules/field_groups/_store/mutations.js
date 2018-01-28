/**
 * FIELD_GROUPS_CONFIG_UPDATED - object type for mutating field-groups module config state
 *
 * @param {Object} state - stored module state object
 * @param {Object} config - module config data mapped to state
 */
const FIELD_GROUPS_CONFIG_UPDATED = (state, config) => {
  state.config = config;
};


/**
 * FIELD_GROUPS_UPDATED - object type for mutating field-groups module fieldGroups state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldGroups - module fieldGroups data mapped to state
 */
const FIELD_GROUPS_UPDATED = (state, fieldGroups) => {
  state.fieldGroups = fieldGroups;
};

/**
 * SELECTED_FIELD_GROUP_UPDATED - object type for mutating field-groups module selectedFieldGroup state
 *
 * @param {Object} state - stored module state object
 * @param {String} selectedFieldGroup - module selectedFieldGroup data mapped to state
 */
const SELECTED_FIELD_GROUP_UPDATED = (state, selectedFieldGroup) => {
  state.selectedFieldGroup = selectedFieldGroup
};

// export available field-groups module state mutations
export default {
  FIELD_GROUPS_CONFIG_UPDATED,
  FIELD_GROUPS_UPDATED,
  SELECTED_FIELD_GROUP_UPDATED
};

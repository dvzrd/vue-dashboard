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
 * FIELD_REFERENCE_NAME_UPDATED - object type for mutating create-field module fieldReferenceName state
 *
 * @param {Object} state - stored module state object
 * @param {String} fieldReferenceName - module fieldReferenceName data mapped to state
 */
const FIELD_REFERENCE_NAME_UPDATED = (state, fieldReferenceName) => {
  state.fieldReferenceName = fieldReferenceName;
};

// export available create-field module state mutations
export default {
  CREATE_FIELD_UPDATED,
  FIELD_DETAILS_UPDATED,
  FIELD_REFERENCE_NAME_UPDATED
};

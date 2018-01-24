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

// export available create-field module state mutations
export default {
  CREATE_FIELD_UPDATED,
  FIELD_TYPES_UPDATED
};

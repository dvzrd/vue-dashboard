/**
 * FIELD_TYPES_CONFIG_UPDATED - object type for mutating field-types module config state
 *
 * @param {Object} state - stored module state object
 * @param {Array} config - module config data mapped to state
 */
const FIELD_TYPES_CONFIG_UPDATED = (state, config) => {
  state.config = config;
};

/**
 * FIELD_TYPES_UPDATED - object type for mutating field-types module fieldTypes state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTypes - module fieldTypes data mapped to state
 */
const FIELD_TYPES_UPDATED = (state, fieldTypes) => {
  state.fieldTypes = fieldTypes;
};

/**
 * FIELD_TYPES_FILTER_UPDATED - object type for mutating field-types module filteredFieldTypes state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTypesFilter - module fieldTypesFilter data mapped to state
 */
const FIELD_TYPES_FILTER_UPDATED = (state, fieldTypesFilter) => {
  state.fieldTypesFilter = fieldTypesFilter;
};

/**
 * FILTERED_BY_TYPE_UPDATED - object type for mutating field-types module fileredByType state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fileredByType - module fileredByType data mapped to state
 */
const FILTERED_BY_TYPE_UPDATED = (state, fileredByType) => {
  state.fileredByType = fileredByType;
};

/**
 * SELECTED_FIELD_TYPE_UPDATED - object type for mutating field-types module selectedFieldType state
 *
 * @param {Object} state - stored module state object
 * @param {String} selectedFieldType - module selectedFieldType data mapped to state
 */
const SELECTED_FIELD_TYPE_UPDATED = (state, selectedFieldType) => {
  state.selectedFieldType = selectedFieldType
};


// export available field-types module state mutations
export default {
  FIELD_TYPES_CONFIG_UPDATED,
  FIELD_TYPES_UPDATED,
  FIELD_TYPES_FILTER_UPDATED,
  FILTERED_BY_TYPE_UPDATED,
  SELECTED_FIELD_TYPE_UPDATED
};

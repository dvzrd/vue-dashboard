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
 * FIELD_TYPES_FILTER_UPDATED - object type for mutating create-field module filteredFieldTypes state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldTypesFilter - module fieldTypesFilter data mapped to state
 */
const FIELD_TYPES_FILTER_UPDATED = (state, fieldTypesFilter) => {
  state.fieldTypesFilter = fieldTypesFilter;
};

/**
 * FILTERED_FIELD_TYPES_UPDATED - object type for mutating create-field module filteredFieldTypes state
 *
 * @param {Object} state - stored module state object
 * @param {Array} filteredFieldTypes - module filteredFieldTypes data mapped to state
 */
const FILTERED_FIELD_TYPES_UPDATED = (state, filteredFieldTypes) => {
  state.filteredFieldTypes = filteredFieldTypes;
};

/**
 * ACTIVE_FIELD_TYPE_UPDATED - object type for mutating create-field module activeFieldType state
 *
 * @param {Object} state - stored module state object
 * @param {String} activeFieldType - module activeFieldType data mapped to state
 */
const ACTIVE_FIELD_TYPE_UPDATED = (state, activeFieldType) => {
  state.activeFieldType = activeFieldType
};

/**
 * SELECTED_FIELD_TYPE_UPDATED - object type for mutating create-field module selectedFieldType state
 *
 * @param {Object} state - stored module state object
 * @param {String} selectedFieldType - module selectedFieldType data mapped to state
 */
const SELECTED_FIELD_TYPE_UPDATED = (state, selectedFieldType) => {
  state.selectedFieldType = selectedFieldType
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

/**
 * FIELD_GROUPS_UPDATED - object type for mutating create-field module fieldGroups state
 *
 * @param {Object} state - stored module state object
 * @param {Array} fieldGroups - module fieldGroups data mapped to state
 */
const FIELD_GROUPS_UPDATED = (state, fieldGroups) => {
  state.fieldGroups = fieldGroups;
};

/**
 * SELECTED_FIELD_GROUP_UPDATED - object type for mutating create-field module selectedFieldGroup state
 *
 * @param {Object} state - stored module state object
 * @param {String} selectedFieldGroup - module selectedFieldGroup data mapped to state
 */
const SELECTED_FIELD_GROUP_UPDATED = (state, selectedFieldGroup) => {
  state.selectedFieldGroup = selectedFieldGroup
};

// export available create-field module state mutations
export default {
  CREATE_FIELD_UPDATED,
  FIELD_TYPES_UPDATED,
  FIELD_TYPES_FILTER_UPDATED,
  FILTERED_FIELD_TYPES_UPDATED,
  ACTIVE_FIELD_TYPE_UPDATED,
  SELECTED_FIELD_TYPE_UPDATED,
  FIELD_DETAILS_UPDATED,
  FIELD_TAGS_UPDATED,
  SELECTED_TAG_GROUP_UPDATED,
  FIELD_GROUPS_UPDATED,
  SELECTED_FIELD_GROUP_UPDATED
};

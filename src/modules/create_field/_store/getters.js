// create-field module state getters
const config = state => state.config;
const fieldTypes = state => state.fieldTypes;
const fieldTypesFilter = state => state.fieldTypesFilter;
const filteredFieldTypes = state => state.filteredFieldTypes;
const activeFieldType = state => state.activeFieldType;
const selectedFieldType = state => state.selectedFieldType;
const fieldDetails = state => state.fieldDetails;
const fieldTags = state => state.fieldTags;
const selectedTagGroup = state => state.selectedTagGroup;
const fieldGroups = state => state.fieldGroups;
const selectedFieldGroup = state => state.selectedFieldGroup;

// export available create-field module state
export default {
  config,
  fieldTypes,
  fieldTypesFilter,
  filteredFieldTypes,
  activeFieldType,
  selectedFieldType,
  fieldDetails,
  fieldTags,
  selectedTagGroup,
  fieldGroups,
  selectedFieldGroup
};

// create-field module state getters
const config = state => state.config;
const fieldTypes = state => state.fieldTypes;
const fieldTypesFilter = state => state.fieldTypesFilter;
const filteredByType = state => state.filteredFieldTypes;
const selectedFieldType = state => state.selectedFieldType;

// export available create-field module state
export default {
  config,
  fieldTypes,
  fieldTypesFilter,
  filteredByType,
  selectedFieldType
};

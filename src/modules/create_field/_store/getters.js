// create-field module state getters
const config = state => state.config;
const fieldTypes = state => state.fieldTypes;
const fieldDetails = state => state.fieldDetails;
const fieldTags = state => state.fieldTags;
const fieldGroups = state => state.fieldGroups;

// export available create-field module state
export default {
  config,
  fieldTypes,
  fieldDetails,
  fieldTags,
  fieldGroups
};

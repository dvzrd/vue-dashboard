// create-field module state getters
const config = state => state.config;
const fieldDetails = state => state.fieldDetails;
const fieldTags = state => state.fieldTags;
const selectedTagGroup = state => state.selectedTagGroup;

// export available create-field module state
export default {
  config,
  fieldDetails,
  fieldTags,
  selectedTagGroup
};

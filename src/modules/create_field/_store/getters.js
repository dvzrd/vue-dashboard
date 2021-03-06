// create-field module state getters
const config = state => state.config;
const fieldDetails = state => state.fieldDetails;
const fieldReferenceName = state => state.fieldReferenceName;

// export available create-field module state
export default {
  config,
  fieldDetails,
  fieldReferenceName
};

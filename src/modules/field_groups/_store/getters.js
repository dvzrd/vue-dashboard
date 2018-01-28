// field-groups module state getters
const config = state => state.config;
const fieldGroups = state => state.fieldGroups;
const selectedFieldGroup = state => state.selectedFieldGroup;

// export available field-groups module state
export default {
  config,
  fieldGroups,
  selectedFieldGroup
};

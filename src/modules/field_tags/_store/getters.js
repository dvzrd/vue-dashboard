// field-tags module state getters
const config = state => state.config;
const fieldTags = state => state.fieldTags;
const fieldTagsGroups = state => state.fieldTagsGroups;
const selectedFieldTagsGroup = state => state.selectedFieldTagsGroup;

// export available field-tags module state
export default {
  config,
  fieldTags,
  fieldTagsGroups,
  selectedFieldTagsGroup
};

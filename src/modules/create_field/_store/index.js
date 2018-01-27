import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// Configure create-field module default state
const state = {
  config: {},
  fieldTypes: [],
  fieldTypesFilter: '',
  filterFieldTypes: [],
  selectedFieldType: null,
  fieldDetails: [],
  fieldTags: [],
  selectedTagGroup: null,
  fieldGroups: [],
  selectedFieldGroup: null
};

// Export available create-field module store features
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

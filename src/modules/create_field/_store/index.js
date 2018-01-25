import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// Configure create-field module default state
const state = {
  config: {},
  fieldTypes: [],
  fieldDetails: [],
  fieldTags: [],
  fieldGroups: []
};

// Export available create-field module store features
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

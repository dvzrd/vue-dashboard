import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// Configure field-groups module default state
const state = {
  config: {},
  fieldGroups: [],
  selectedFieldGroup: '',
  createNewFieldGroup: false
};

// Export available field-groups module store features
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

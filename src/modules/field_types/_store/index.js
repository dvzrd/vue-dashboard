import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// Configure field-types module default state
const state = {
  config: {},
  fieldTypes: [],
  fieldTypesFilter: '',
  filteredByType: [],
  selectedFieldType: ''
};

// Export available field-types module store features
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

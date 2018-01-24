import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// Configure dashboard module default state
const state = {
  config: {},
  dropdownOpen: false,
  sidebarExtend: false
};

// Export available dashboard module store features
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

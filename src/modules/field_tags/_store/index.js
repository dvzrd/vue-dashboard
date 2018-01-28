import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// Configure field-tags module default state
const state = {
  config: {},
  fieldTags: [],
  fieldTagsGroups: [],
  selectedFieldTagsGroup: ''
};

// Export available field-tags module store features
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

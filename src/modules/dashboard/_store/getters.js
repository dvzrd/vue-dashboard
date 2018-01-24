// dashboard module state getters
const config = state => state.config;
const dropdownOpen = state => state.dropdownOpen;
const sidebarExtend = state => state.sidebarExtend;

// export available dashboard module state
export default {
  config,
  dropdownOpen,
  sidebarExtend
};

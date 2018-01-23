const DASHBOARD_UPDATED = (state, config) => {
  state.config = config;
  state.sidebarExtend = config.sidebarExtend;
};

const DROPDOWN_TOGGLED = state => {
  state.dropdownOpen = !state.dropdownOpen;
};

const DROPDOWN_CLOSED = state => {
  state.dropdownOpen = false;
};

const SIDEBAR_TOGGLED = state => {
  state.sidebarExtend = !state.sidebarExtend;
};

const SIDEBAR_REDUCED = state => {
  state.sidebarExtend = false;
};

export default {
  DASHBOARD_UPDATED,
  DROPDOWN_TOGGLED,
  DROPDOWN_CLOSED,
  SIDEBAR_TOGGLED,
  SIDEBAR_REDUCED
};

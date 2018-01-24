/**
 * DASHBOARD_UPDATED - object type for mutating dashboard module config state
 *
 * @param {Object} state - stored module state object
 * @param {Object} config - module config data mapped to state
 */
const DASHBOARD_UPDATED = (state, config) => {
  state.config = config;
  state.sidebarExtend = config.sidebarExtend;
};

/**
 * DROPDOWN_TOGGLED - object type for mutating dashboard module dropdownOpen state to opposite boolean value
 *
 * @param {Object} state - stored module state object
 */
const DROPDOWN_TOGGLED = state => {
  state.dropdownOpen = !state.dropdownOpen;
};

/**
 * DROPDOWN_CLOSED - object type for mutating dashboard module dropdownOpen state to false boolean value
 *
 * @param {Object} state - stored module state object
 */
const DROPDOWN_CLOSED = state => {
  state.dropdownOpen = false;
};

/**
 * SIDEBAR_TOGGLED - object type for mutating dashboard module sidebarExtend state to opposite boolean value
 *
 * @param {Object} state - stored module state object
 */
const SIDEBAR_TOGGLED = state => {
  state.sidebarExtend = !state.sidebarExtend;
};

/**
 * SIDEBAR_REDUCED - object type for mutating dashboard module sidebarExtend state to false boolean value
 *
 * @param {Object} state - stored module state object
 */
const SIDEBAR_REDUCED = state => {
  state.sidebarExtend = false;
};

// export available dashboard module state mutations
export default {
  DASHBOARD_UPDATED,
  DROPDOWN_TOGGLED,
  DROPDOWN_CLOSED,
  SIDEBAR_TOGGLED,
  SIDEBAR_REDUCED
};

import api from '../_api';

/**
 * getConfig - commit dashboard config fetched from api to store
 *
 * @param {Object} context - methods/params needed to complete action
 */
const getConfig = context =>
  api.fetchConfig
    .then(response => {
      context.commit('DASHBOARD_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

/**
 * toggleDropdown - commit dropdown state changes on dropdown toggle action
 *
 * @param {Objec} context - methods/params needed to complete action
 */
const toggleDropdown = context =>
  context.commit('DROPDOWN_TOGGLED');

/**
 * closeDropdown - commit dropdown state change to close on dropdown close action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const closeDropdown = context =>
  context.commit('DROPDOWN_CLOSED');

/**
 * toggleSidebar - commit sidebar state changes on sidebar toggle action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const toggleSidebar = context =>
  context.commit('SIDEBAR_TOGGLED');

/**
 * reduceSidebar - commit sidebar state change to close on sidebar close action
 *
 * @param {Object} context - methods/params needed to complete action
 */
const reduceSidebar = context =>
  context.commit('SIDEBAR_REDUCED');

// export available dashboard actions for container
export default {
  getConfig,
  toggleDropdown,
  closeDropdown,
  toggleSidebar,
  reduceSidebar
};

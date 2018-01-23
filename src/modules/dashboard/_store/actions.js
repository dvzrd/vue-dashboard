import api from '../_api';

const getConfig = context =>
  api.fetchConfig
    .then(response => {
      context.commit('DASHBOARD_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

const toggleDropdown = context =>
  context.commit('DROPDOWN_TOGGLED');

const closeDropdown = context =>
  context.commit('DROPDOWN_CLOSED');

const toggleSidebar = context =>
  context.commit('SIDEBAR_TOGGLED');

const reduceSidebar = context =>
  context.commit('SIDEBAR_REDUCED');

export default {
  getConfig,
  toggleDropdown,
  closeDropdown,
  toggleSidebar,
  reduceSidebar
};

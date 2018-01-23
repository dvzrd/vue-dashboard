// Configure dashboard - options to configure dashboard settings and layout
const fetchConfig = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 'dashboard', // id for dashboard wrapper
      theme: 'core', // for changing dashboard theme,
      affix: true, // choose to affix dashboard ui or not
      sidebar: true, // choose between topbar or sidebar nav
      sidebarExtend: false, // change default state of sidebar menu
      notifications: false, // hide or show notifications in topbar
      breadcrumbs: false, // hide or show breadcrumbs in view
      user: 'John Jones', // name of logged in user
      footer: '©2018, BriteCore. All rights reserved.' // footer content
    });
  }, 250);
});

export default {
  fetchConfig
};

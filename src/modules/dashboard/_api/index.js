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
      footer: true, // hide or show dashboard footer
      logo: '/static/logo.png', // dashboard logo image url
      avatar: '/static/avatar.png', // user avatar image url
      user: 'Art Vandelay', // name of logged in user
      legal: '©2018, BriteCore. All rights reserved.' // copyright message or legal print
    });
  }, 250);
});

export default {
  fetchConfig
};

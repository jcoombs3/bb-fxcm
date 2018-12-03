window.document.addEventListener('DOMContentLoaded', () => {
  const services = {};
  const pageModel = {
    name: 'bb-fxcm-app-ang',
    properties: {},
    children: [],
  };

  window.BB.startSingleApp(services)
    .then(app => app.bootstrap(pageModel));
});
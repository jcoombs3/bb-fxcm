window.document.addEventListener('DOMContentLoaded', () => {
  const services = {};
  const pageModel = {
    name: 'bb-fxcm-app-ang',
    properties: {},
    children: [{
        name: 'fxcm-styleguide',
        properties: {
          classId: 'FxcmStyleguideComponent'
        }
      }],
  };

  window.BB.startSingleApp(services)
    .then(app => app.bootstrap(pageModel));
});
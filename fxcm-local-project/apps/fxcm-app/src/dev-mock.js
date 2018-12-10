window.document.addEventListener('DOMContentLoaded', () => {
  const services = {
    forms: () => () => ({
      postEvent: (data) => {
        console.log('Form Change', data)
        return Promise.resolve({
          page: {},
          messages: {
            errors: [],
          },
        });
      },
      events: {
        page: {},
        messages: {
          errors: [],
        },
      },
    }),
  };

  const model = {
    name: 'bb-fxcm-app-ang',
    properties: {},
    children: [
      {
        name: 'styleguide',
        properties: {
          classId: 'FxcmStyleguideComponent'
        }
      },
//      {
//        name: 'my-forms-container',
//        properties: {
//          classId: 'BbFormsContainerComponent',
//          formId: '',
//          apiRoot: '',
//        },
//        children: [createFormModel()],
//      },
    ],
  };

  window.BB.startSingleApp(services).then(app => app.bootstrap(model));
});

function createFormModel() {
  return {
    name: 'P0',
    properties: {
      classId: 'BbFormPageComponent',
    },
    children: [
      {
        name: 'P0-C0',
        properties: {
          classId: 'BbFormFieldsetContainerComponent',
          label: 'Form UI Elements',
        },
        children: [
          {
            name: 'P0-C0-F0',
            properties: {
              classId: 'FxcmFormInputTextComponent',
              label: 'Text Component',
              dataType: 'text',
              value: 'value',
              placeholder: 'Placeholder',
              helpText: '',
              required: true,
              disabled: false,
              readonly: false,
              multiValued: false,
              messages: {
                errors: [],
                warnings: []
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [],
            },
          }
        ],
      },
    ],
  };
}

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
        children: [{
            name: 'P0-C0-F4',
            properties: {
              classId: 'FxcmFormFlagSelectorComponent',
              label: 'Select Component',
              dataType: 'string',
              value: '001-ethiopia',
              placeholder: '',
              helpText: 'Select an option from this component',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: true,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [
                {
                  label: 'Ethiopia',
                  value: '001-ethiopia',
                },
                {
                  label: 'Oman',
                  value: '002-oman',
                },
                {
                  label: 'Tanzania',
                  value: '003-tanzania',
                },
                {
                  label: 'Slovenia',
                  value: '004-slovenia',
                },
                {
                  label: 'Puerto Rico',
                  value: '005-puerto-rico',
                },
              ],
            },
          },
                   
                   
                   
          {
            name: 'P0-C0-F4',
            properties: {
              classId: 'BbFormSelectComponent',
              label: 'Select Component',
              dataType: 'string',
              value: '',
              placeholder: '',
              helpText: 'Select an option from this component',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: true,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [
                {
                  label: 'Option A',
                  value: 'a',
                },
                {
                  label: 'Option B',
                  value: 'b',
                },
                {
                  label: 'Option C',
                  value: 'c',
                },
                {
                  label: 'Option Y',
                  value: 'y',
                },
                {
                  label: 'Option Z',
                  value: 'z',
                },
              ],
            },
          },
        ],
      },
    ],
  };
}

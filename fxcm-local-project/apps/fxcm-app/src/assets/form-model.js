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
            name: 'P0-C0-T0',
            properties: {
              classId: 'BbFormTextItemComponent',
              value: `This is a text item component, it is used to display text from a model element`,
            },
          },
          {
            name: 'P0-C0-A1',
            properties: {
              classId: 'BbFormAssetComponent',
              format: 'html',
              value: `This is a <b>Asset html component</b>, it is used to display text from a <em>model</em> element`,
            },
          },
          {
            name: 'P0-C0-L1',
            properties: {
              classId: 'BbFormLinkComponent',
              href: 'http://backbase.com',
              label: `This is a link to Backbase`,
            },
          },
          {
            name: 'P0-C0-F0',
            properties: {
              classId: 'BbFormInputTextComponent',
              label: 'Text Component',
              dataType: 'password',
              value: '',
              placeholder: 'Enter text...',
              helpText: 'You can enter text in this field',
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
          },
          {
            name: 'P0-C0-F1',
            properties: {
              classId: 'BbFormInputNumberComponent',
              label: 'Number Component',
              dataType: 'number',
              value: 0,
              placeholder: 'Enter number...',
              helpText: 'You can enter a number in this field',
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
          },
          {
            name: 'P0-C0-F2',
            properties: {
              classId: 'BbFormInputNumberComponent',
              label: 'Currency Component',
              dataType: 'currency',
              value: 0,
              placeholder: 'Enter number...',
              helpText: 'You can enter a number in this field',
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
          },
          {
            name: 'P0-C0-F3',
            properties: {
              classId: 'BbFormInputNumberComponent',
              label: 'Percentage Component',
              dataType: 'percentage',
              value: 0,
              placeholder: 'Enter number...',
              helpText: 'You can enter a number in this field',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: false,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [],
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
          {
            name: 'P0-C0-F5',
            properties: {
              classId: 'BbFormInputCheckboxComponent',
              label: 'Checkbox Component',
              dataType: 'boolean',
              value: false,
              placeholder: '',
              helpText: 'You can check this fields value',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: false,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [],
            },
          },
          {
            name: 'P0-C0-F7',
            properties: {
              classId: 'BbFormTextAreaComponent',
              label: 'Text Area Component',
              dataType: 'text',
              value: '',
              placeholder: 'Enter text...',
              helpText: 'You can enter text in this field',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: false,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [],
            },
          },
          {
            name: 'P0-C0-F8',
            properties: {
              classId: 'BbFormDatePickerComponent',
              label: 'Datepicker Component',
              dataType: 'text',
              value: '',
              placeholder: 'Enter date...',
              helpText: 'You can enter date in this field',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: false,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [],
            },
          },
          {
            name: 'P0-C0-F9',
            properties: {
              classId: 'BbFormUnknownComponent',
              label: 'Some broken component',
              dataType: 'unknown',
              value: 'broken',
              placeholder: 'This is broken',
              helpText: 'Broken',
              required: false,
              disabled: false,
              readonly: false,
              multiValued: false,
              messages: {
                errors: [],
                warnings: [],
              },
              validations: [],
              isValid: true,
              cssClassValue: '',
              options: [],
            },
          },
          {
            name: 'P0-C0-F10',
            properties: {
              classId: 'BbFormImageComponent',
              label: 'Image Component',
              dataType: 'jpeg',
              imageName:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
              width: 150,
              height: 150,
            },
          },
          {
            name: 'P0-C0-F11-C0',
            properties: {
              classId: 'BbFormContentItemComponent',
              cssClassValue: '',
            },
            children: [
              {
                name: 'P0-C0-F11-C0-T0',
                properties: {
                  classId: 'BbFormTextItemComponent',
                  value: `This is a text item component, it is used to display text from a model element`,
                },
              },
              {
                name: 'P0-C0-F11-C0-T1',
                properties: {
                  classId: 'BbFormTextItemComponent',
                  value: `This is a text item component, it is used to display text from a model element`,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'P0-C1',
        properties: {
          classId: 'BbFormPanelContainerComponent',
          label: 'Group Container',
        },
        children: [
          {
            name: 'P0-C1-F0',
            properties: {
              classId: 'BbFormGroupCheckboxComponent',
              label: 'Group Checkbox Component',
              dataType: 'boolean[]',
              value: [],
              placeholder: '',
              helpText: 'You can select multiple options in this component',
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
          {
            name: 'P0-C1-F1',
            properties: {
              classId: 'BbFormGroupRadioComponent',
              label: 'Group Radio Component',
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
      {
        name: 'P0-B0',
        properties: {
          classId: 'BbFormButtonComponent',
          label: `I'm a button!`,
        },
      },
      {
        name: 'P0-B1',
        properties: {
          classId: 'BbFormButtonComponent',
          label: `I'm a disabled button!`,
          disabled: true,
        },
      },
    ],
  };
}

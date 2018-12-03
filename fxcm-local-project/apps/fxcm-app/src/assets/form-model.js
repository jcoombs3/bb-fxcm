function createFormModel() {
  return {
    name: 'P0',
    properties: {
      classId: 'BbFormPageComponent',
    },
    children: [
      {
        name: 'P0-B0',
        properties: {
          classId: 'BbFormButtonComponent',
          label: `I'm a button!`,
          color: 'warning'
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

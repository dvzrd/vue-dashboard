const fetchFieldTypes = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        id: 'field-18b9a98e-812d-4627-95e0-994245a137ee',
        type: 'text',
        desc: 'String of text',
        default: 'Free-form text input',
      },
      {
        id: 'field-4eaf41ba-0632-4d51-9a11-7921ea819e0f',
        type: 'date',
        desc: 'Standard ISO format date',
        default: 'Datepicker, with configurable format',
      },
      {
        id: 'field-cc2bfba2-207e-49ba-b942-3c79c24d6665',
        type: 'number',
        desc: 'String of number(s)',
        default: 'Quantity, limit or ID inputs',
      },
      {
        id: 'field-5ccca7c3-2bef-4c9e-bb4a-cffc2534b217',
        type: 'currency',
        desc: 'Standard currency format options',
        default: 'Expenses or Estimated Value inputs',
      }
    ]);
  }, 1000);
});

export default {
  fetchFieldTypes
};

const userSelectOptions = [
  {
    label: 'Filter by country',
    options: [
      {
        label: 'russia',
        value: {
          value: 'russia',
          type: 'country',
        },
      },
      {
        label: 'usa',
        type: 'country',
        value: {
          value: 'usa',
          type: 'country',
        },
      },
    ],
  },
  {
    label: 'Filter by score',
    options: [
      {
        label: '> 20',
        type: 'score',
        value: {
          value: 'moreThanTwenty',
          type: 'score',
        },
      },
      {
        label: '< 10',
        type: 'score',
        value: {
          value: 'lessThatTen',
          type: 'score',
        },
      },
    ],
  },
];

export default userSelectOptions;

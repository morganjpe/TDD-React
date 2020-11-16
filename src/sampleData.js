const today = new Date();

const at = (hrs) => today.setHours(hrs, 0);

export const appointments = [
  {
    startsAt: at(12),
    stylist: 'Maggie Appleton',
    service: 'beard trim',
    notes: 'this is a note',
    customer: {
      firstName: 'Ashley',
      lastName: 'Davies',
      phoneNumber: '01216080888',
    },
  },
  {
    startsAt: at(13),
    stylist: 'Maggie Appleton',
    service: 'beard trim',
    notes: 'this is a note',
    customer: {
      firstName: 'Jordan',
      lastName: 'Pickford',
      phoneNumber: '01216080889',
    },
  },
];

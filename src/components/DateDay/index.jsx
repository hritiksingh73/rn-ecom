import React from 'react';
import moment from 'moment';

const dateDay = [
  {
    day: moment().format('ddd'),
    date: moment().format('Do'),
    month: moment().format('MMM'),
  },
  {
    day: moment().add(1, 'days').format('ddd'),
    date: moment().add(1, 'days').format('Do'),
    month: moment().add(1, 'days').format('MMM'),
  },
  {
    day: moment().add(2, 'days').format('ddd'),
    date: moment().add(2, 'days').format('Do'),
    month: moment().add(2, 'days').format('MMM'),
  },
  {
    day: moment().add(3, 'days').format('ddd'),
    date: moment().add(3, 'days').format('Do'),
    month: moment().add(3, 'days').format('MMM'),
  },
];

export default dateDay;

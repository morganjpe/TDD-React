import React from 'react';
import ReactDOM from 'react-dom';

// mocks
import { appointments } from './sampleData';

// components
import { AppointmentsDayView } from './AppointmentsDayView';

ReactDOM.render(
  <AppointmentsDayView appointments={appointments} />,
  document.getElementById('root')
);

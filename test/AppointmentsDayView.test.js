import ReactDom from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';

// mocks
import { appointments } from '../src/sampleData';

import {
  Appointment,
  AppointmentsDayView,
} from '../src/AppointmentsDayView';

describe('Appointment', () => {
  afterEach(cleanup);

  it('renders a table', () => {
    const { getByTestId } = render(<Appointment customer={[]} />);
    expect(getByTestId('customer-details-table')).not.toBeNull();
  });

  it('renders the appointment details', () => {
    const { getByText } = render(
      <Appointment {...appointments[0]} />
    );
    expect(
      getByText(/today's appointment at 12:00/i)
    ).not.toBeNull();
    expect(getByText(/ashley davies/i)).not.toBeNull();
    expect(getByText('01216080888')).not.toBeNull();
    expect(/maggie appleton/i).not.toBeNull();
    expect(/beard trim/i).not.toBeNull();
    expect(/this is a note/i).not.toBeNull();
  });

  it('renders another appointment details', () => {
    const { getByText } = render(
      <Appointment {...appointments[1]} />
    );
    expect(
      getByText(/today's appointment at 13:00/i)
    ).not.toBeNull();
    expect(getByText(/jordan pickford/i)).not.toBeNull();
    expect(getByText('01216080889')).not.toBeNull();
    expect(/maggie appleton/i).not.toBeNull();
    expect(/beard trim/i).not.toBeNull();
    expect(/this is a note/i).not.toBeNull();
  });
});

describe('AppointmentsDayView', () => {
  it('renders a div with the correct ID', () => {
    const { getByTestId } = render(
      <AppointmentsDayView appointments={[]} />
    );
    expect(getByTestId('appointments-wrapper')).not.toBeNull();
  });

  it('renders a list of buttons in an ol element', () => {
    const { getAllByRole } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('renders each appointment with the correct date', () => {
    const { getAllByRole } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    const button = getAllByRole('button');
    expect(button[0].textContent).toEqual('12:00');
    expect(button[1].textContent).toEqual('13:00');
  });

  it("should initially display 'No appointments today'", () => {
    const { getByText } = render(
      <AppointmentsDayView appointments={[]} />
    );
    expect(getByText(/no appointments today/i)).not.toBeNull();
  });

  it('selects the first appointment by default', () => {
    const { getByText } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    expect(getByText(/ashley/i)).not.toBeNull();
  });

  it('renders another appointment when selected', () => {
    const { getAllByRole, getByText } = render(
      <AppointmentsDayView appointments={appointments} />
    );
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[1]);
    expect(getByText(/jordan/i)).not.toBeNull();
  });
});

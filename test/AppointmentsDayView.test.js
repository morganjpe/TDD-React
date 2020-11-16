import ReactDom from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';

// mocks
import { appointments } from '../src/sampleData';

import {
  Appointment,
  AppointmentsDayView,
} from '../src/AppointmentsDayView';

describe('Appointment', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) =>
    ReactDom.render(component, container);

  it('renders a table', () => {
    render(<Appointment customer={[]} />);
    expect(container.querySelector('table')).not.toBeNull();
  });

  it('renders the appointment details', () => {
    render(<Appointment {...appointments[0]} />);
    expect(container.querySelector('.date').textContent).toMatch(
      "Today's appointment at 12:00"
    );
    expect(
      container.querySelector('.customer-name td ~ td').textContent
    ).toMatch('Ashley Davies');
    expect(
      container.querySelector('.customer-phone-number td ~ td')
        .textContent
    ).toMatch('01216080888');
    expect(
      container.querySelector('.stylist td ~ td').textContent
    ).toMatch('Maggie Appleton');
    expect(
      container.querySelector('.service td ~ td').textContent
    ).toMatch('beard trim');
    expect(
      container.querySelector('.notes td ~ td').textContent
    ).toMatch('this is a note');
  });

  it('renders another appointment details', () => {
    render(<Appointment {...appointments[1]} />);
    expect(container.querySelector('.date').textContent).toMatch(
      "Today's appointment at 13:00"
    );
    expect(
      container.querySelector('.customer-name td ~ td').textContent
    ).toMatch('Jordan Pickford');
    expect(
      container.querySelector('.customer-phone-number td ~ td')
        .textContent
    ).toMatch('01216080889');
    expect(
      container.querySelector('.stylist td ~ td').textContent
    ).toMatch('Maggie Appleton');
    expect(
      container.querySelector('.service td ~ td').textContent
    ).toMatch('beard trim');
    expect(
      container.querySelector('.notes td ~ td').textContent
    ).toMatch('this is a note');
  });
});

describe('AppointmentsDayView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) =>
    ReactDom.render(component, container);

  it('renders a div with the correct ID', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(
      container.querySelector('div#appointmentsDayView')
    ).not.toBeNull();
  });

  it('renders a list of appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('ol').children).toHaveLength(2);
  });

  it('renders each appointment with the correct date', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(
      container.querySelectorAll('li')[0].textContent
    ).toEqual('12:00');
    expect(
      container.querySelectorAll('li')[1].textContent
    ).toEqual('13:00');
  });

  it("should initially display 'No appointments today'", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch('No appointments today');
  });

  it('selects the first appointment by default', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('has a button element in each li', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll('li > button')).toHaveLength(
      2
    );
    expect(
      container.querySelectorAll('li > button')[0].type
    ).toEqual('button');
  });

  it('renders another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll('li > button')[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch('Jordan');
  });
});

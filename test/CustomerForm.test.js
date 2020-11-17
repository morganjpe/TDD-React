import React from 'react';
import { render } from '@testing-library/react';

import { CustomerForm } from '../src/CustomerForm';

describe('<CustomerForm />', () => {
  it('renders a form', () => {
    const { getByTestId } = render(<CustomerForm />);
    expect(getByTestId('customer')).not.toBeNull();
  });

  it('renders firstName field as a textbox', () => {
    const { getByLabelText } = render(<CustomerForm />);

    const input = getByLabelText(/your first name/i);

    expect(input).not.toBeNull();
    expect(input.tagName).toEqual('INPUT');
    expect(input.type).toEqual('text');
  });
});

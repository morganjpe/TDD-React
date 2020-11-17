import React from 'react';

export const CustomerForm = () => {
  return (
    <form id="customer" data-testid="customer">
      <label htmlFor="firstName">Your First Name</label>
      <input type="text" id="firstName" />
    </form>
  );
};

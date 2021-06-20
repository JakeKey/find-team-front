/// <reference types="cypress" />
import { mount } from '@cypress/react';

import InputError from 'components/InputError';

describe('<InputError />', () => {
  const testValue = 'Test Error';
  beforeEach(() => {
    mount(<InputError error={testValue} />);
  });

  it('renders InputError', () => {
    cy.findAllByText(testValue).should('exist');
  });
});

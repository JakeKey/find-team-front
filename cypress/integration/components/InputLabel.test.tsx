/// <reference types="cypress" />
import { mount } from '@cypress/react';

import InputLabel from 'components/InputLabel';

describe('<InputLabel />', () => {
  const testValue = 'Test Label';
  beforeEach(() => {
    mount(<InputLabel label={testValue} />);
  });

  it('renders InputLabel', () => {
    cy.findAllByText(testValue).should('exist');
  });
});

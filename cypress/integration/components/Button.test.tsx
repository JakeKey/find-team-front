/// <reference types="cypress" />
import { mount } from '@cypress/react';

import Button from 'components/Button';

describe('<Button />', () => {
  const testValue = 'Test Button';
  beforeEach(() => {
    mount(<Button text={testValue} />);
  });

  it('renders Button', () => {
    cy.findAllByText(testValue).should('exist');
  });
});

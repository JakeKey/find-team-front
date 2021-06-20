/// <reference types="cypress" />
import { mount } from '@cypress/react';

import LinkButton from 'components/LinkButton';

describe('<LinkButton />', () => {
  const testValue = 'Test Button';
  beforeEach(() => {
    mount(<LinkButton text={testValue} href="/" />);
  });

  it('renders LinkButton', () => {
    cy.findAllByText(testValue).should('exist');
  });
});

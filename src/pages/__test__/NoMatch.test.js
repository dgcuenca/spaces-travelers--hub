/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react';
import NoMatch from '../NoMatch';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../testingHelper';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    renderWithProviders(<NoMatch />);
    expect(screen.getByText('Nothing to see here!')).toBeInTheDocument();
    expect(screen.getByText('Go to the home page')).toBeInTheDocument();
  });
});

/**
 * @jest-environment jsdom
 */

import Profile from '../Profile';
import '@testing-library/jest-dom';
import renderWithProviders from '../../../testingHelper';
import store from '../../app/store';

describe('Profile Page', () => {
  test('renders Profile Page', () => {
    const tree = renderWithProviders(<Profile />);
    expect(tree.toJSON).toMatchSnapshot();
  });
});

/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../app/store';
import { fetchRockets } from '../../features/rockets/rockets.slice';

describe('Rockets Page', () => {
  test('renders Rockets Page', async () => {
    await store.dispatch(fetchRockets());
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });
});

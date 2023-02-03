import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Mission from './Mission';

test('renders mission', () => {
  const missions = [
    {
      mission_id: '1',
      mission_name: 'Apollo13',
      description: 'mission',
      reserved: true
    }
  ]
  const mockStore = configureStore();
  let store = mockStore(missions)
  const component = render(<Provider store={store}><Mission missions={missions} /></Provider>);
  ;//since reserved is passing as true
  expect(component.container).toHaveTextContent(missions[0].mission_name);

})

test('renders bagets', () => {
  const missions = [
    {
      mission_id: '1',
      mission_name: 'Apollo13',
      description: 'mission',
      reserved: false
    }
  ]
  const mockStore = configureStore();
  let store = mockStore(missions)

  const component = render(<Provider store={store}><Mission missions={missions} /></Provider>);

  ;//since reserved is passing as false
  expect(component.container).toHaveTextContent('NOT A MEMBER');
  expect(component.container).toHaveTextContent('Join Mission');

})
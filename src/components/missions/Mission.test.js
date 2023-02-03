import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
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
  let store=mockStore(missions)

  const component = render(<Provider store={store}><Mission missions={missions} /></Provider>);

  component.getByText('Active Member');//since reserved is passing as true
  expect(component.container).toHaveTextContent(missions[0].mission_name);
  
})

test('Clicking join Button', () => {
  const missions = [
    {
      mission_id: '1',
      mission_name: 'Apollo13',
      description: 'mission',
      reserved: true
    }
  ]
  const mockStore = configureStore();
  let store=mockStore(missions)

  const component = render(<Provider store={store}><Mission missions={missions} /></Provider>);
  const button = component.getByText('Active Member');

  
})
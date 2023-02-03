import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Mission from './Mission';

test('renders mission', () => {
  const mission = {
    mission_id: '1',
    mission_name: 'Apollo13',
    description: 'mission',
    reserved: true
  }
  
  const component = render (<Mission mission={mission} />);

  component.getByText('Active Member')
})
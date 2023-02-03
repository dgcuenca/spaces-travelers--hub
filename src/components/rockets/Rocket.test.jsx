/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Rocket from './Rocket';
import testingHelper from '../../../testingHelper';

const rocket = {
  id: '5e9d0d95eda69955f709d1eb',
  name: 'Falcon 1',
  type: 'Falcon 1',
  description:
    'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  flickr_image: 'https://imgur.com/DaCfMsj.jpg',
};

test('render single Rocket', () => {
  testingHelper(<Rocket rocket={rocket} />);
  const rocketTitle = screen.getByText(rocket.name);
  const rocketDescription = screen.getByText(rocket.description);
  expect(rocketTitle).toBeInTheDocument();
  expect(rocketDescription).toBeInTheDocument();
});

import store from '../../app/store';
import { fetchRockets, reserveRocket } from './rockets.slice';

describe('Rockets redux state tests', () => {
  it('Should initially set rockets to an empty object', () => {
    const state = store.getState().rockets;
    expect(state.rockets).toEqual([]);
  });

  it('Should be able to fetch the rockets list', async () => {
    const result = await store.dispatch(fetchRockets());
    expect(result.type).toBe('rockets/FETCH_ROCKETS/fulfilled');
    const state = store.getState().rockets;
    expect(state.status).toBe('succeeded');
    expect(state.error).toBe(null);
    expect(state.rockets).toEqual([
      {
        id: '5e9d0d95eda69955f709d1eb',
        name: 'Falcon 1',
        type: 'Falcon 1',
        description:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        flickr_image: 'https://imgur.com/DaCfMsj.jpg',
      },
      {
        id: '5e9d0d95eda69973a809d1ec',
        name: 'Falcon 9',
        type: 'Falcon 9',
        description:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        flickr_image:
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      },
      {
        id: '5e9d0d95eda69974db09d1ed',
        name: 'Falcon Heavy',
        type: 'Falcon Heavy',
        description:
          'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        flickr_image:
          'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
      },
      {
        id: '5e9d0d96eda699382d09d1ee',
        name: 'Starship',
        type: 'Starship',
        description:
          'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        flickr_image:
          'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
      },
    ]);
  });

  it('Falcon 1 Should be reserved in rockets list', () => {
    store.dispatch(reserveRocket('5e9d0d95eda69955f709d1eb'));
    const state = store.getState().rockets;
    expect(state.rockets[0].name).toEqual('Falcon 1');
    expect(state.rockets[0].reserved).toEqual(true);
  });

  it('Starship Should be reserved in rockets list', () => {
    store.dispatch(reserveRocket('5e9d0d96eda699382d09d1ee'));
    const state = store.getState().rockets;
    expect(state.rockets[3].name).toEqual('Starship');
    expect(state.rockets[3].reserved).toEqual(true);
  });
});

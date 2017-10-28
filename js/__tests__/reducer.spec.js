// @flow

import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers(
    { searchTerm: '', shows: [] },
    { type: 'SET_SEARCH_TERM', payload: 'black' },
  );
  expect(state).toEqual({ searchTerm: 'black', shows: [] });
});

test('ADD_API_DATA with one show', () => {
  const state = reducers(
    { searchTerm: '', shows: [] },
    {
      type: 'ADD_API_DATA',
      payload: {
        shows: [
          { rating: '1.1' },
          { title: 'Westworld' },
          { year: '2016–' },
          {
            description:
              'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          },
          { poster: 'ww.jpg' },
          { imdbID: 'tt0475784' },
          { trailer: 'eX3u0IlBBO4' },
        ],
      },
    },
  );
  expect(state).toEqual({
    searchTerm: '',
    shows: [
      [
        { rating: '1.1' },
        { title: 'Westworld' },
        { year: '2016–' },
        {
          description:
            'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        },
        { poster: 'ww.jpg' },
        { imdbID: 'tt0475784' },
        { trailer: 'eX3u0IlBBO4' },
      ],
    ],
  });
});

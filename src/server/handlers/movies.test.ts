import movieListHandler from './movies';

const moviesList = [];
jest.mock('../models/movies', () => ({
  default: {
    getAllMovies: () => moviesList,
  }
}));

describe('Movies Handler', () => {
  it('should get movies list', async () => {
      const req = {};
      const resp = {};
      
      expect(await movieListHandler(req, resp)).toEqual({data: moviesList});
  })
});
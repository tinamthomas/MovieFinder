import movies from "./movies";
const movieList = ['movie1', 'movie2'];
jest.mock("../db/client", () => ({
    default: { list: () => movieList }
}));

describe("Movies", () => {
    it('should get all movies', async () => {
        expect(await movies.getAllMovies()).toEqual(movieList);
    });
});

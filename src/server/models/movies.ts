import client from '../db/client';

const movies = {
    getAllMovies: (count: number = 10) => client.list('actors', count),
}

export default movies;
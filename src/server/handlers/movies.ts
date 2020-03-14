import movies from "../models/movies";

const movieListHandler = async(req, resp) => {
    return {data: await movies.getAllMovies()};
}

export default movieListHandler;
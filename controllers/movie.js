// load all the models
const Movie = require("../models/movie");

const getMovies = async (genre, rating, sort) => {
  try {
    let filters = {};
    let sortQuery = { _id: -1 };
    if (genre) {
      filters.genre = genre;
    }
    if (rating) {
      filters.rating = { $gt: rating };
    }
    /* 
    sorting > 1 is asc, -1 is desc
    default sorting is sort by _id > { _id: 1 }
    */
    if (sort === "title") {
      sortQuery = { title: 1 }; //a-z
    } else if (sort === "rating") {
      sortQuery = { rating: -1 }; // highest rating first since its -1
    }
    const movies = await Movie.find(filters).sort(sortQuery);
    return movies;
  } catch (error) {
    throw new Error(error);
  }
};

// add
const addMovie = async (title, director, release_year, genre, rating) => {
  // create new movie
  const newMovie = new Movie({
    title,
    director,
    release_year,
    genre,
    rating,
  });
  // save the movie with mongodb
  await newMovie.save();
  return newMovie;
};

// update
const updateMovie = async (
  movie_id,
  title,
  director,
  release_year,
  genre,
  rating
) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    movie_id,
    {
      title,
      director,
      release_year,
      genre,
      rating,
    },
    { new: true } // send in the updated data
  );
  return updatedMovie;
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
};

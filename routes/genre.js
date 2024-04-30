const express = require("express");

// create express router for movies
const router = express.Router();

// load all the models
const Movie = require("../models/movie");
const Show = require("../models/show");
router.get("/", async (req, res) => {
  const type = req.query.type;
  let genres = [];
  if (type === "shows") {
    //* load all the shows to extract genre out of it
    const shows = await Show.find();
    //extract genre from movies
    shows.forEach((show) => {
      // if is not available, then only add into genres
      if (!genres.includes(show.genre)) {
        genres.push(show.genre);
      }
    });
  } else {
    //* load all the movies to extract genre out of it
    const movies = await Movie.find();
    //extract genre from movies
    movies.forEach((movie) => {
      // if is not available, then only add into genres
      if (!genres.includes(movie.genre)) {
        genres.push(movie.genre);
      }
    });
  }
  res.status(200).send(genres);
});

module.exports = router;

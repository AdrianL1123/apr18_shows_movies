const express = require("express");

//* create express router for movies
const router = express.Router();

//* load all the models
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    // const genre = req.query.genre;
    // const movies = await Movie.find({ genre: genre });
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//?  /movies/:id same thing diff syntax

router.get("/", async (req, res) => {
  console.log(Movie)
  try {
    const genre = req.query.genre;
    const rating = req.query.rating;
    let movies = [];
    if (genre) {
      movies = await Movie.find({ genre: genre });
    } else if (rating) {
      movies = await Movie.find({ rating: { $gt: rating } });
    } else {
      movies = await Movie.find();
    }
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

module.exports = router;
//* export default router;
//todo (same as this but diff syntax) export default router;

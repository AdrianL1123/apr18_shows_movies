const express = require("express");
const { getMovies, addMovie, updateMovie } = require("../controllers/movie");

// create express router for movies
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  //!! original function
  // try {
  //   const genre = req.query.genre;
  //   const rating = req.query.rating;
  //   let movies = [];
  //   if (genre) {
  //     movies = await Movie.find({ genre: genre });
  //   } else if (rating) {
  //     movies = await Movie.find({ rating: { $gt: rating } });
  //   } else {
  //     movies = await Movie.find();
  //   }
  //   res.status(200).send(movies);
  // } catch (error) {
  //   res.status(400).send({
  //     message: error.message,
  //   });
  // }
  //! use controller function
  const genre = req.query.genre;
  const rating = req.query.rating;
  try {
    const movies = await getMovies(genre, rating);
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    //   const movie = await Movie.findOne({ _id: req.params.id });
    const movie = await Movie.findById(req.params.id);
    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//todo CRUD
/* 
C - Create | POST
R - Read | GET
U - Update | PUT
D - Delete | DELETE
*/

//* route for add new mmovie POST http://localhost:8888/movies
//* create new movie using the following data
/*- title: Dune Part 2
  - Director: Denis
  - release_year: 2024
  - genre: "Sci-Fi"
  - rating: 9 */
router.post("/", async (req, res) => {
  try {
    console.log(req.body.director);
    const title = req.body.title;
    const director = req.body.director;
    const release_year = req.body.release_year;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const newMovie = await addMovie(
      title,
      director,
      release_year,
      genre,
      rating
    );
    //put addMovie function here
    res.status(200).send(newMovie);
  } catch (error) {
    //* error handling
    res.status(400).send({
      message: error.message,
    });
  }
});

//* route for update movie PUT http://localhost:8888/movies/with the id
router.put("/:id", async (req, res) => {
  try {
    const movie_id = req.params.id;
    const title = req.body.title;
    const director = req.body.director;
    const release_year = req.body.release_year;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const updatedMovie = await updateMovie(
      movie_id,
      title,
      director,
      release_year,
      genre,
      rating
    );
    res.status(200).send(updatedMovie);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//* route for delete movie DELETE http://localhost:8888/movies/with the id
router.delete("/:id", async (req, res) => {
  try {
    const movie_id = req.params.id;
    await Movie.findByIdAndDelete(movie_id);
    res.status(200).send("Movie has been successfully deleted");
  } catch (error) {
    //* error handling
    res.status(400).send({
      message: error.message,
    });
  }
});

module.exports = router;
//* export default router;
//todo (same as this but diff syntax) export default router;

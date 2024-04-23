const express = require("express");
const { getShows, addShow, updateShow } = require("../controllers/show");

// create express router for movies
const router = express.Router();

// load all the models
const Show = require("../models/show");
const { addMovie } = require("../controllers/movie");

router.get("/", async (req, res) => {
  // try {
  // const genre = req.query.genre;
  // const rating = req.query.rating;
  // const premiere_year = req.query.premiere_year;
  // let shows = [];
  // if ( genre && rating && premiere_year ) {

  // } else if ( genre && rating ) {

  // } else if ( genre && premiere_year ) {

  // } else if ( rating && premiere_year ) {

  // } else if ( genre ) {

  // } else if ( rating ) {

  // } else if ( premiere_year ) {

  // } else {

  // }
  // shows = await Show.find({
  //   genre: genre,
  //   rating: { $gt: rating },
  // });
  // res.status(200).send(shows);
  /* ---------------------- */

  //! original function
  // let filters = {};
  // if (genre) {
  //   filters.genre = genre;
  // }
  // if (rating) {
  //   filters.rating = { $gt: rating };
  // }
  // if (premiere_year) {
  //   filters.premiere_year = { $gt: premiere_year };
  // }
  // !! use controller function
  const genre = req.query.genre;
  const rating = req.query.rating;
  const premiere_year = req.query.premiere_year;
  try {
    const shows = await getShows(genre, rating, premiere_year);
    res.status(200).send(shows);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const show = await Show.findById(req.params.id);
    res.status(200).send(show);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//? add
router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const newShow = await addShow(
      title,
      creator,
      premiere_year,
      seasons,
      genre,
      rating
    );
    //put addShow function here (call)
    res.status(200).send(newShow);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//? update
router.put("/:id", async (req, res) => {
  try {
    const show_id = req.params.id;
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;
    const updatedShow = await updateShow(
      show_id,
      title,
      creator,
      premiere_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(updatedShow);
    // code here
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//? delete
router.delete("/:id", async (req, res) => {
  try {
    const show_id = req.params.id;
    //code here
    await Show.findByIdAndDelete(show_id);
    res.status(200).send("Show has been successfully deleted");
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

module.exports = router;
// export default router;

//* load all the models
const Show = require("../models/show");
const { updateMovie } = require("./movie");

const getShows = async (genre, rating, premiere_year) => {
  try {
    let shows = {};
    if (genre) {
      shows = await Show.find({ genre });
    }
    if (rating) {
      shows = await Show.find({ $gt: rating });
    }
    if (premiere_year) {
      shows = await Show.find({ $gt: premiere_year });
    }
    if (shows) {
      shows = await Show.find();
    }
    return shows;
  } catch (error) {
    throw new Error(error);
  }
};

//* add
const addShow = async (
  title,
  creator,
  premiere_year,
  seasons,
  genre,
  rating
) => {
  const newShow = new Show({
    title,
    creator,
    premiere_year,
    seasons,
    genre,
    rating,
  });
  //save the shows with mongodb
  await newShow.save();
  return newShow;
};

//* update
const updateShow = async (
  show_id,
  title,
  creator,
  premiere_year,
  seasons,
  genre,
  rating
) => {
  const updatedShow = await Show.findByIdAndUpdate(
    show_id,
    {
      title,
      creator,
      premiere_year,
      seasons,
      genre,
      rating,
    },
    { new: true }
  );
  return updatedShow;
};

module.exports = {
  getShows,
  addShow,
  updateShow,
};

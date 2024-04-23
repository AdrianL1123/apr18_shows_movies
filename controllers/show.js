//* load all the models
const Show = require("../models/show");

const getShows = async (genre, rating, premiere_year) => {
  try {
    let filters = {};
    if (genre) {
      filters.genre = genre;
    }
    if (rating) {
      filters.rating = { $gt: rating };
    }
    if (premiere_year) {
      filters.premiere_year = { $gt: premiere_year };
    }
    const shows = await Show.find(filters);
    return shows;
  } catch (error) {
    throw new Error(error);
  }
};

const getShow = async (id) => {
  const show = await Show.findById(id);
  return show;
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

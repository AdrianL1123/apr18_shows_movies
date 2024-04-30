const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//* create the express app
const app = express();

//* middleware to handle JSON request
app.use(express.json());

//* middleware to setup cors policy
const corsHandler = cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
  optionsSuccessStatus: 200,
});

// *apply the cors to middleware
app.use(corsHandler);

//* connect to Mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/netflix")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

//* Routes
const movieRouter = require("./routes/movie");
const showRouter = require("./routes/show");
const genreRouter = require("./routes/genre");
app.use("/movies", movieRouter);
app.use("/shows", showRouter);
app.use("/genres", genreRouter);

//* start the server
app.listen(8888, () => {
  console.log("Server is running at http://localhost:8888");
});

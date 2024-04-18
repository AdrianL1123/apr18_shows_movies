//* create a new database
// use("library");

//* create a collection
//* once created you can just comment the code below out
// db.createCollection("books");

//* add one data
// db.books.insertOne({
//   title: "Book one",
//   description: "Description of book one",
//   genre: "horror",
// });

//! CRUD = Create, Read, Update, Delete

//* add multiple data
// db.books.insertMany([
//   {
//     title: "Book one",
//     description: "Description of book one",
//     genre: "horror",
//   },
//   {
//     title: "Book two",
//     description: "Description of book two",
//     genre: "sci-fi",
//   },
//   {
//     title: "Book three",
//     description: "Description of book three",
//     genre: "fantasy",
//   },
// ]);

//* update
// db.books.updateOne(
//   //* set will create the value if no exists, if exist it will use it to update the value
//   { title: "Book three" },
//   { $set: { title: "Book 3" } }
// );

// db.books.updateOne(
//   { _id: ObjectId("661f35e81248dd89e905542b") },
//   {
//     $set: { title: "Book Three." },
//   }
// );

// db.books.updateMany(
//   { genre: "horror" },
//   {
//     $set: { rating: 4 },
//   }
// );

//* delete
// db.books.deleteOne({ _id: ObjectId("661f3783cd5772091e2bbb7a") });

//* find
// db.books.findOne({ genre: "fantasy" });
// db.books.find({ genre: "horror" });
// db.books.find({ rating: { $gt: 4 } });
// db.books.find({ genre: "horror" }).limit(2);

//* exercise 1
// todo adding books
// db.books.insertMany([
//   {
//     Title: "The Great Gatsby",
//     Author: "F. Scott Fitzgerald",
//     Genre: "Fiction",
//     Published: "1925",
//   },
//   {
//     Title: "To Kill a Mockingbird",
//     Author: "Harper Lee",
//     Genre: "Fiction",
//     Published: "1960",
//   },
//   {
//     Title: "A Brief History of Time",
//     Author: "Stephen Hawking",
//     Genre: "Science",
//     Published: "1988",
//   },
// ]);
// todo Querying the collection
// db.books.find({ Author: "F. Scott Fitzgerald" });
// db.books.find({ Genre: "Science" });
//todo updating books
// db.books.updateOne({ title: "The Great Gatsby" }, { $set: { price: 10 } });
// db.books.updateOne({ title: "A Brief History of Time" }, { $set: { published: "1987" } });
// todo removing books
// db.books.deleteOne({ _id: ObjectId("661f3eb1fb9a211cc002976b") });

//* exercise 2
//todo setting up
use("netflix");
// db.createCollection("movies");
//todo adding data
// db.movies.insertMany([
//   {
//     title: "Ocean's Twelve",
//     director: "Steven Soderbergh",
//     release_year: 2004,
//     genre: "Heist",
//     rating: 6.5,
//   },
//   {
//     title: "Inception",
//     director: "Christopher Nolan",
//     Release_Year: 2010,
//     genre: "Sci-Fi",
//     rating: 8.8,
//   },
//   {
//     title: "The Grand Budapest Hotel",
//     director: "Wes Anderson",
//     Release_Year: 2014,
//     genre: "Comedy",
//     rating: 8.1,
//   },
//   {
//     title: "Blade Runner 2049",
//     director: "Denis Villeneuve",
//     Release_Year: 2017,
//     genre: "Sci-Fi",
//     rating: 8.0,
//   },
//   {
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     Release_Year: 2014,
//     genre: "Sci-Fi",
//     rating: 8.6,
//   },
//   {
//     title: "Mad Max: Fury Road",
//     director: "George Miller",
//     Release_Year: 2015,
//     genre: "Action",
//     rating: 8.1,
//   },
//   {
//     title: "The Dark Knight",
//     director: "Christopher Nolan",
//     Release_Year: 2008,
//     genre: "Action",
//     rating: 9.0,
//   },
//   {
//     title: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     release_year: 1994,
//     genre: "Crime",
//     rating: 8.9,
//   },
//   {
//     title: "The Shape of Water",
//     director: "Guillermo del Toro",
//     release_year: 2017,
//     genre: "Drama",
//     rating: 7.3,
//   },
//   {
//     title: "Dunkirk",
//     director: "Christopher Nolan",
//     release_year: 2017,
//     genre: "War",
//     rating: 7.9,
//   },
// ]);
//todo Advanced Queries
// db.movies.find({ director: "Christopher Nolan" });
// db.movies.find({ genre: "Sci-Fi" });
// //todo Updating Data
// db.movies.updateOne(
//   { title: "Ocean's Twelve" },
//   {
//     $set: { rating: 7.0 },
//   }
// );
// db.movies.updateOne(
//   { title: "Inception" },
//   { $set: { Budget: "$160 million" } }
// );
//todo complex operations
// db.movies.insertOne({
//   title: "Eternal Sunshine of the Spotless Mind",
//   director: "Michel Gondry",
//   release_year: 2004,
//   genre: "Romance",
//   rating: 8.3,
// });
//todo removing data
// db.movies.deleteMany({ rating: { $lt: 7.5 } });

//* EXERCise 3 apr 18
// db.createCollection("shows");
db.shows.insertMany([
  {
    title: "Breaking Bad",
    creator: "Vince Gilligan",
    premiere_year: 2008,
    end_year: 2013,
    seasons: 5,
    genre: "Crime",
    rating: 9.5,
  },
  {
    title: "Stranger Things",
    creator: "The Duffer Brothers",
    premiere_year: 2016,
    seasons: 4,
    genre: "Sci-Fi",
    rating: 8.7,
  },
  {
    title: "The Office",
    creator: "Greg Daniels",
    premiere_year: 2005,
    end_year: 2013,
    seasons: 9,
    genre: "Comedy",
    rating: 8.9,
  },
  {
    title: "Game of Thrones",
    creator: "David Benioff & D.B. Weiss",
    premiere_year: 2011,
    end_year: 2019,
    seasons: 8,
    genre: "Fantasy",
    rating: 8.3,
  },
  {
    title: "The Mandalorian",
    creator: "Jon Favreau",
    premiere_year: 2019,
    seasons: 2,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    title: "Westworld",
    creator: "Jonathan Nolan & Lisa Joy",
    premiere_year: 2016,
    seasons: 4,
    genre: "Sci-Fi",
    rating: 8.6,
  },
  {
    title: "Fargo",
    creator: "Noah Hawley",
    premiere_year: 2014,
    seasons: 4,
    genre: "Crime",
    rating: 8.9,
  },
  {
    title: "Better Call Saul",
    creator: "Vince Gilligan & Peter Gould",
    premiere_year: 2015,
    end_year: 2022,
    seasons: 6,
    genre: "Crime",
    rating: 8.8,
  },
  {
    title: "Black Mirror",
    creator: "Charlie Brooker",
    premiere_year: 2011,
    seasons: 5,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    title: "The Crown",
    creator: "Peter Morgan",
    premiere_year: 2016,
    seasons: 6,
    genre: "Drama",
    rating: 8.7,
  },
]);

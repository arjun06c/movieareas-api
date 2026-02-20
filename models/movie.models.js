import mongoose from "mongoose";

// write schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true,
  },
});

// create model
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

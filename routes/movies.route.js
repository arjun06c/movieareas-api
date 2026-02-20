import express from "express";
import {
  MoviesCreate,
  MoviesIndex,
  MoviesUpdate,
  MoviesDelete,
  MovieDetails,
} from "../controllers/movies.controller.js";

const router = express.Router();

// R - Read movies
router.get("/", MoviesIndex);

router.get("/:id", MovieDetails);


// C - Create movie
router.post("/", MoviesCreate);

// U - Update movie
router.put("/:id", MoviesUpdate);

// D - Delete movie
router.delete("/:id", MoviesDelete);

export default router;

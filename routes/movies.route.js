import express from 'express';
import { MoviesCreate, MoviesDelete, MoviesIndex, MoviesUpdate } from '../controllers/movies.controller.js';
const router=express.Router();



// CRUD Functionality of movies

//C -For Creating

router.get('/',MoviesCreate)


// R - For Reading

router.post('/',MoviesIndex)


// U - For Updating
router.put('/:id',MoviesUpdate);


// D - For Deleting
router.delete('/:id',MoviesDelete)

export default router;
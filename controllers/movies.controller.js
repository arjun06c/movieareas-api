import Movie from "../models/movie.models.js";
export const MoviesCreate=async(req,res)=>{
   //id,title,description

   //Validate your Data
   const newMovie=new Movie({
    title:req.body.title,
    desc:req.body.desc
   });
  try
  {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  }
  catch(error){
 return res.status(400).json({message:error.message})
  }
  
   return res.json(req.body)

}


export const MoviesIndex=async(req,res)=>{
    try{
        const movies=await Movie.find()
        res.json(movies)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

export const MovieDetails=async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        if(movie==null)
        {
            return res.status(404).json({message:"movie not found"});
        }
        else{
            res.json(movie);
        }
    }
    catch(error)
    {
        return res.status(500).json({message:error.message})
    }
}

export const MoviesUpdate=async(req,res)=>{
    if(req.body.title!=null)
    {
        res.movie.title=req.body.title;
    }
    if(req.body.desc!=null)
    {
        res.movie.desc=req.body.desc;
    }
    try{
        const updatedmovie=await res.movie.save();
        res.json(updatedmovie);
    }
    catch(error)
    {
        return res.status(400).json({message:error.message})
    }
    
}


export const MoviesDelete=(req,res)=>{
    res.send("deleting a movie");
} 
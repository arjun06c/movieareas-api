import express from "express";
import movieRoutes from "./routes/movies.route.js";

import connectDB from "./lib/db.js";
const app=express();
app.port=6969

//Connect DB
connectDB();



app.get("/",(req,res)=>{
    res.json({msg:"hello student"});
});

app.use("/movies",movieRoutes);
app.listen(6969,()=>{
    console.log(`the server is running at http://localhost:${6969}`);
    
})


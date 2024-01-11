import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// import { ArtistRouter } from "./Router/ArtistRouter.js"
import { SongRouter } from "./Router/SongRouter.js"

const app = express()
app.use(express.json())
app.use(cors())
// app.use("/getArtists",ArtistRouter)
app.use("/songs",SongRouter)

mongoose.connect(
    "mongodb+srv://siddhantyadav:siddhantyadav@cluster0.ti48bua.mongodb.net/FavouriteTune?retryWrites=true&w=majority",
    
  );
  

app.listen(3000,()=>{
    console.log("Working Fine")
})
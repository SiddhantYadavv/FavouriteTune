import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// import { ArtistRouter } from "./Router/ArtistRouter.js"
import { SongRouter } from "./Router/SongRouter.js"
import dotenv from "dotenv";

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
// app.use("/getArtists",ArtistRouter)
app.use("/songs",SongRouter)
const port = process.env.PORT || 3000

mongoose.connect(
    process.env.MONGODB_URL  
  );
  

app.listen(port,()=>{
    console.log("Working Fine")
})
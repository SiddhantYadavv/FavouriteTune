import express from "express"
import { Song } from "../models/Song.js"
import {Artist} from "../models/Artist.js"
 
const SongRouter = express.Router()

SongRouter.get("/",async(req,res)=>{
    try {
        const response = await Song.find({}).populate("artist")
        res.json(response)
    } catch (error) {
        res.json(error)        
    }
})

SongRouter.post("/", async(req,res)=>{
    try {
        let savedArtist=new Artist({name:req.body.Artist})
        await savedArtist.save()
        
        let savedSong = new Song({title:req.body.Title,artist:savedArtist._id})
        await savedSong.save()
        res.json(savedSong);

    } catch (error) {
        res.json(error)
    }
})


export {SongRouter}
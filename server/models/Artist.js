import mongoose from "mongoose";

const ArtistSchema = mongoose.Schema({
    name: {type:String, required:true}
})

const Artist = new mongoose.model("Artist",ArtistSchema)

export {Artist}
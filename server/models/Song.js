import mongoose from "mongoose";

const SongSchema = mongoose.Schema({
    title:{type:String, required:true},
    artist:{type:mongoose.Schema.Types.ObjectId,ref:"Artist", required:true}
})

const Song =  new mongoose.model("Song",SongSchema)
export {Song}

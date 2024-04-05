import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  artist: { type: String, required: true },
  genre: {
    type: String,
    required: true,
    enum: ["hip-hop", "jazz", "bollywood"],
  },
  theme: {
    type: String,
    required: true,
    enum: ["sad", "happy", "motivational", "romance"],
  },
});

export const SongModel = mongoose.model("song", SongSchema);

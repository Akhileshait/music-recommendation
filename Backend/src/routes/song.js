import express from "express";

const router = express.Router();
import { SongModel } from "../models/Song.js";

router.post("/newSong", async (req, res) => {
  try {
    const { id, name, artist, genre, theme } = req.body;
    const newSong = new SongModel({
      id,
      name,
      artist,
      genre,
      theme,
    });
    await newSong.save();
    res.status(200).json({ message: "Song registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/allSongs", async (req, res) => {
    try {
        const songs = await SongModel.find({});
        return res.status(200).json(songs);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })

export { router as SongRouter };

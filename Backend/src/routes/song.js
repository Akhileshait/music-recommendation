import express from "express";

const router = express.Router();
import { SongModel } from "../models/Song.js";
import { UserModel } from "../models/User.js";

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
});

router.get("/artists", async (req, res) => {
  try {
    const _id = "660f83a64a9c29b0e10bcadd";
    const user = await UserModel.findById(_id);
    const artist = user.favArtist;
    return res.status(200).json(artist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/genre", async (req, res) => {
  try {
    const _id = "660f83a64a9c29b0e10bcadd";
    const user = await UserModel.findById(_id);
    const genre = user.genre;
    return res.status(200).json(genre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/history", async (req, res) => {
  try {
    const _id = "660f83a64a9c29b0e10bcadd";
    const user = await UserModel.findById(_id);
    const history = user.history;
    const songs = [];
    for (const historyId of history) {
      const song = await SongModel.findById(historyId); // Assuming SongModel is your Mongoose model for songs
      if (song) {
        songs.push(song);
      }
    }
    return res.status(200).json(songs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/history1", async (req, res) => {
  try {
    const _id = "660f83a64a9c29b0e10bcadd";
    const user = await UserModel.findById(_id);
    const history = user.history;
    const songs = [];
    for (const historyId of history) {
      const song = await SongModel.findById(historyId); // Assuming SongModel is your Mongoose model for songs
      if (song) {
        songs.push(song);
      }
    }
    return res.status(200).json(songs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export { router as SongRouter };
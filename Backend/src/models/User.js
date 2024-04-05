import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  favArtist:[{type:String,default:""}],
  genre:[{type:String,default:""}],
  history:[{type: mongoose.Schema.Types.ObjectId}]
});

export const UserModel = mongoose.model("users", UserSchema);
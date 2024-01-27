const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  files: { type: Array },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;

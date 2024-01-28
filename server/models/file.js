// models/file.js
const mongoose = require("mongoose");

// Define a nested schema for file details
const FileDetailsSchema = new mongoose.Schema({
  path: String,
  lastModified: Date,
  lastModifiedDate: Date,
  name: String,
  size: Number,
  type: String,
  webkitRelativePath: String,
});

const FileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  data: { type: Buffer, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  details: { type: FileDetailsSchema }, // Use the nested schema here
});

const File = mongoose.model("Files", FileSchema);
module.exports = File;

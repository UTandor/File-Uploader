const express = require("express");
const multer = require("multer");
const router = express.Router();
const User = require("../models/user");
const File = require("../models/file");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/:username", upload.single("file"), async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    const file = new File({
      filename: req.file.originalname,
      data: req.file.buffer,
      user: user._id,
      details: {
        path: req.file.path,
        lastModified: req.file.lastModified,
        lastModifiedDate: req.file.lastModifiedDate,
        name: req.file.originalname,
        size: req.file.size,
        type: req.file.mimetype,
        webkitRelativePath: req.file.webkitRelativePath,
      },
    });
    await file.save();

    res.status(201).send({ fileId: file._id, file: file });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
});

router.get("/:username", async (req, res) => {
  const username = req.params.username;

  try {
    // Check if the user exists by username
    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Retrieve all files for the user
    const files = await File.find({ user: user._id });

    // Map the files to include only necessary information
    const filesArray = files.map((file) => ({
      fileId: file._id,
      filename: file.filename,
    }));

    res.status(200).send(filesArray);
  } catch (error) {
    console.error("Error getting user files:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

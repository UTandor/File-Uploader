const express = require("express");
const multer = require("multer");
const router = express.Router();
const User = require("../models/user");
const File = require("../models/file");

const storage = multer.memoryStorage();
const upload = multer({ dest: "upload/" });

router.post("/:username", upload.array("files"), async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    // Save all files in parallel
    const files = req.files.map((file) => {
      return new File({
        filename: file.originalname,
        data: file.buffer,
        user: user._id,
        details: JSON.stringify({
          path: file.path,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          name: file.originalname,
          size: file.size,
          type: file.mimetype,
          webkitRelativePath: file.webkitRelativePath,
        }),
      });
    });

    await Promise.all(files.map((file) => file.save()));

    res.status(201).json({ files: files });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
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

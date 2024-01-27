const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:username", (req, res) => {
  const username = req.params.username;
  User.find({ name: username })
    .then((result) => res.json(result[0].files))
    .catch((err) => res.json(err));
});

router.post("/add", (req, res) => {
  const { username, files } = req.body;
  User.updateOne({ name: username }, { files: files })

    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
app.use(cors())
const PORT = 5000

const dbUrl =
  "mongodb+srv://ancrobot2244:deI3RAmjxFgKOgDe@cluster0.bhgwkdm.mongodb.net/qomal-dev";
mongoose.connect(dbUrl);
console.log("Mongo DB connected")
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});

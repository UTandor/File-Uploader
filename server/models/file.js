const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  data: Buffer,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  details: { type: mongoose.Schema.Types.Mixed },
});

const MyFile = mongoose.model('MyFile', fileSchema);

module.exports = MyFile;
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  name: String,
  options: [
    {
      name: String,
      votes: Number,
    },
  ],
});

module.exports = mongoose.model('Poll', pollSchema);

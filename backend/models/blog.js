
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  title: {
    type: String,
    min: [3, 'Blog title must be greater than 2 characters'],
    max: [100, 'Blog title must be less than 101 characters'],
    required: [true, 'Blog must have a title']
  },
  body: String,
  startDate: Date,
  endDate: Date
});

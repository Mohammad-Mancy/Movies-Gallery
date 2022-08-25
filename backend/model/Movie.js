const mongoose = require('mongoose');

const SchemaTypes = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    overview: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    image: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
    vote_avg: {
        type: SchemaTypes.Decimal128,
        required: true,
        min:0.0,
        max:10.0
    },
    release_date: {
        type: String,
        required: true,
      },
    original_lng: {
        type: String,
        required: true,
        min:1,
        max:20
    }
  });
  
  module.exports = mongoose.model('Movie', movieSchema);
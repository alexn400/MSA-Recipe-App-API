const mongoose = require('mongoose');

// Define schema for user
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: Array,
  },
  method: {
    type: Array,
  },
  prepTime: {
    type: String,
  },
  servings: {
    type: Number,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: Array,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  authorName: {
    type: String,
  },
  image: {
    type: Buffer,
  },
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

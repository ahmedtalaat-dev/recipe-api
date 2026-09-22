const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    ingredients: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    instructions: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    cookingTime: {
      type: Number,
      required: true,
      min: 1,
    },

    image: {
      type: String,
      trim: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

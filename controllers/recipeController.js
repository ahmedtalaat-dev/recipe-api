const Recipe = require("../models/recipeModel.js");

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
};

// Get one recipe
const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Failed to get recipe" });
  }
};

// Create a recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : undefined,
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: "Failed to create recipe" });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: "Failed to update recipe" });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete recipe" });
  }
};

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}
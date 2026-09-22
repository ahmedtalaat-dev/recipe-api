const express = require("express");

const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);

router.post("/", upload.single("image"), createRecipe);

router.patch("/:id", upload.single("image"), updateRecipe);

router.delete("/:id", deleteRecipe);

module.exports = router;
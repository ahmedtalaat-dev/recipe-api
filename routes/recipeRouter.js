const express = require("express");

const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const upload = require("../middleware/uploadMiddleware");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);

router.post("/", auth, upload.single("image"), createRecipe);

router.patch("/:id", auth, upload.single("image"), updateRecipe);

router.delete("/:id", auth, deleteRecipe);

module.exports = router;

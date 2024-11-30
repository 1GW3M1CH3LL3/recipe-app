const express=require("express")
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload } = require("../controller/recipe")
const verifyToken = require("../middleware/auth")
const router = express.Router()

router.get("/", getRecipes)//Get all recipes
router.get("/:id", getRecipe)//get recipe by id
router.post("/",upload.single('file'), verifyToken, addRecipe)//add recipe
router.put("/:id", upload.single('file'), editRecipe)//edit recipe
router.delete("/:id", deleteRecipe)//delete recipe


module.exports=router
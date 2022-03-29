import express from "express";
import {
  restaurants,
  addRestaurants,
  getSpecificRestaurant,
  updateRestaurant,
  deleteRestaurant,
  PopRestaurants,
  getSpecificChefRestaurants,
} from "../controllers/restaurants-controller";

const router = express.Router();

router.get("/", restaurants);
router.post("/add-restaurant", addRestaurants);
router.get("/pop-restaurants", PopRestaurants);
router.get("/chef-restaurants/:id", getSpecificChefRestaurants);
router.put("/update-restaurant/:id", updateRestaurant);
router.delete("/delete-restaurant/:id", deleteRestaurant);
router.get("/:id", getSpecificRestaurant);

export { router as restaurantsRouter };

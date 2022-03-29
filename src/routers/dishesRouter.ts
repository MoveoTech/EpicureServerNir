import express from "express";
import {
  addDish,
  deleteDish,
  dishes,
  getSpecificDish,
  updateDish,
} from "../controllers/dishes-controller";

const router = express.Router();

router.get("/", dishes);
router.get("/signature-dishes/", updateDish);
router.post("/add-dish", addDish);
router.put("/update-dish/:id", updateDish);
router.delete("/delete-dish/:id", deleteDish);
router.get("/:id", getSpecificDish);

export { router as dishesRouter };

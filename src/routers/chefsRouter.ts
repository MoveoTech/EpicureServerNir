import express from "express";
import {
  addChef,
  chefs,
  deleteChef,
  getChefOfTheWeek,
  getSpecificChef,
  newChefOfTheWeek,
  updateChef,
} from "../controllers/chefs-controller";

const router = express.Router();

router.get("/", chefs);
router.post("/add-chef", addChef);
router.get("/chef-of-the-week", getChefOfTheWeek);
router.get("/:id", getSpecificChef);
router.put("/update-chef/:id", updateChef);
router.put("/update-chef-of-the-week/:id", newChefOfTheWeek);
router.delete("/delete-chef/:id", deleteChef);

export { router as chefsRouter };

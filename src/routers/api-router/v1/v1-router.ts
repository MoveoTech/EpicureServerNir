import express from "express";
import cors from "cors";
import { homepageRouter } from "../../homepageRouter";
import { restaurantsRouter } from "../../restaurantsRouter";
import { chefsRouter } from "../../chefsRouter";
import { dishesRouter } from "../../dishesRouter";

const app = express();
app.use(cors());
const router = express.Router();

router.use("/homepage", homepageRouter);
router.use("/restaurants", restaurantsRouter);
router.use("/chefs", chefsRouter);
router.use("/dishes", dishesRouter);

export { router as apiV1 };

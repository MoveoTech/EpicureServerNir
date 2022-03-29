import express from "express";
import cors from "cors";
import { apiV1 } from "./v1/v1-router";

const app = express();
app.use(cors());
const router = express.Router();

router.use("/v1", apiV1);

export { router as apiRouter };

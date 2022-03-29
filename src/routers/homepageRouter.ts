import express from "express";
import { Restaurant } from "../models/restaurants-collection";

const router = express.Router();

router.get("/homepage", async (req, res) => {
  const SiteData = await getSiteData();
  return res.status(200).send({ SiteData });
});

const getSiteData = async () => {
  const RestaurantsDb = await Restaurant.find().exec();
  return RestaurantsDb;
};

export { router as homepageRouter };

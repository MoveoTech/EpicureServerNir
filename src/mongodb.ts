import { connect } from "mongoose";
import { Chef } from "./models/chefs-collection";
import { Restaurant } from "./models/restaurants-collection";
import { Dish } from "./models/dishes-collection";
import { Admins } from "./models/admins-collection";
import { ChefOfTheWeek } from "./models/chef-of-the-week.collection";
import { SignatureDish } from "./models/signature-dishes.collection";

const MONGODB_URL = "mongodb://localhost:27017/epicure";

export const collections = {
  Chef,
  Restaurant,
  Dish,
  Admins,
  ChefOfTheWeek,
  SignatureDish,
};

export async function connectDb() {
  await connect(MONGODB_URL);
}

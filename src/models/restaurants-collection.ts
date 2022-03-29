import { model, Schema, Document, Types } from "mongoose";
import { IChef } from "./chefs-collection";
import { IDish } from "./dishes-collection";

export interface IRestaurant extends Document {
  name: string;
  image: string;
  isPop: boolean;
  signatureDish: IDish["_id"];
  chef: IChef["_id"];
}

const RestaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  isPop: { type: Boolean, required: true },
  signatureDish: { type: Schema.Types.ObjectId, ref: "Dish", required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
});

export const Restaurant = model<IRestaurant>("Restaurant", RestaurantSchema);

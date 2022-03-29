import { model, Schema, Document, Types } from "mongoose";
import { IRestaurant } from "./restaurants-collection";

export interface IDish extends Document {
  name: string;
  img: string;
  ingredients: string;
  price: string;
  spicy: boolean;
  vegetarian: boolean;
  vegan: boolean;
  restaurant: IRestaurant["_id"];
}

const DisheSchema = new Schema<IDish>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: String, required: true },
  spicy: { type: Boolean, required: true },
  vegetarian: { type: Boolean, required: true },
  vegan: { type: Boolean, required: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

export const Dish = model<IDish>("Dish", DisheSchema);

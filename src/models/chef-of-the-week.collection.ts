import { model, Schema, Document, Types } from "mongoose";
import { IChef } from "./chefs-collection";

export interface IChefOfTheWeek extends Document {
  chefOfTheWeek: IChef;
}

const ChefOfTheWeekSchema = new Schema<IChefOfTheWeek>({
  chefOfTheWeek: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
});

export const ChefOfTheWeek = model<IChefOfTheWeek>(
  "ChefOfTheWeek",
  ChefOfTheWeekSchema
);

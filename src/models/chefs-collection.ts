import { model, Schema, Document, Types } from "mongoose";

export interface IChef extends Document {
  name: string;
  img: string;
  description: string;
}

const ChefSchema = new Schema<IChef>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
});

export const Chef = model<IChef>("Chef", ChefSchema);

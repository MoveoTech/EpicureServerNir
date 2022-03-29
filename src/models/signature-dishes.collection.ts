import { model, Schema, Document, Types } from "mongoose";
import { IDish } from "./dishes-collection";

export interface ISignatureDish extends Document {
  signatueDish: IDish;
}

const SignatureDisheSchema = new Schema<ISignatureDish>({
  signatueDish: { type: Schema.Types.ObjectId, ref: "Dish", required: true },
});

export const SignatureDish = model<ISignatureDish>(
  "SignatureDish",
  SignatureDisheSchema
);

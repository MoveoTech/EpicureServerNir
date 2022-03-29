import { model, Schema, Document, Types } from "mongoose";

export interface IAdmins extends Document {
  role: string;
  name: string;
  lastName: string;
  userName: string;
  password: number;
}

const AdminsSchema = new Schema<IAdmins>({
  role: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: Number, required: true },
});

export const Admins = model<IAdmins>("Admins", AdminsSchema);

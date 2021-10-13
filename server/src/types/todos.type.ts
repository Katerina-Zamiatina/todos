import { Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  year: string;
  status: boolean;
}

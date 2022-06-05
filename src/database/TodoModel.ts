import { Schema } from "mongoose";
import mongoose from "mongoose";

const TodoModel = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoModel);

import { ITodo } from "../types/todos.type";
import { Model, model, Schema } from "mongoose";

const todoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;

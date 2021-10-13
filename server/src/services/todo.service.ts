import { ITodo } from "../types/todos.type";
import Todo from "../models/Todo";

export default class TodoService {
  async getAllTodos() {
    const todos = await Todo.find();
    return todos;
  }

  async getTodoById(todoId: string) {
    const todo = await Todo.findOne({ _id: todoId });
    return todo;
  }

  async createTodo(body: ITodo) {
    const newTodo = await new Todo(body);
    newTodo.save();
    return newTodo;
  }

  async deleteTodo(todoId: string) {
    const deletedTodo = await Todo.findByIdAndRemove({
      _id: todoId,
    });
    return deletedTodo;
  }

  async updateTodo(todoId: string, body: ITodo) {
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      { ...body },
      { new: true },
    );
    return updatedTodo;
  }
}

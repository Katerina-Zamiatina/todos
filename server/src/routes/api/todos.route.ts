import { Router } from "express";
import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.get("", todoController.getAllTodos.bind(todoController));
todosRouter.get("/:todoId", todoController.getTodoById.bind(todoController));
todosRouter.post("", todoController.addTodo.bind(todoController));
todosRouter.patch("/:todoId", todoController.updateTodo.bind(todoController));
todosRouter.delete("/:todoId", todoController.deleteTodo.bind(todoController));

export default todosRouter;

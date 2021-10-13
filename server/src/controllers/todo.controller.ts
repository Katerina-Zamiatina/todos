import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import TodoService from "../services/todo.service";
import Validator from "../middlewares/validation";

const validate = new Validator();

export class TodoController {
  constructor(private todoService: TodoService) {}

  getAllTodos(_: Request, res: Response) {
    validate.validationController(res, () => {
      return this.todoService.getAllTodos();
    });
  }

  async getTodoById(req: Request, res: Response) {
    try {
      const { todoId } = req.params;
      const todo = await this.todoService.getTodoById(todoId);
      res.status(StatusCodes.OK).json({ status: "success", todo });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send(error.message);
    }
  }

  addTodo(req: Request, res: Response) {
    const { body } = req;
    validate.validationController(res, () => {
      return this.todoService.createTodo(body);
    });
  }

  async updateTodo(req: Request, res: Response) {
    const {
      params: { todoId },
      body,
    } = req;
    validate.validationController(res, () => {
      return this.todoService.updateTodo(todoId, body);
    });
  }

  async deleteTodo(req: Request, res: Response) {
    const { todoId } = req.params;
    validate.validationController(res, () => {
      return this.todoService.deleteTodo(todoId);
    });
  }
}

const todoController = new TodoController(new TodoService());

export default todoController;

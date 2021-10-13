import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { check } from "express-validator";

export default class Validator {
  validate = () => {
    return [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
    ];
  };
  async validationController(res: Response, cb: Function) {
    try {
      const result = await cb();
      res.status(StatusCodes.OK).json({ result });
    } catch (error) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Something went wrong", error });
    }
  }
}

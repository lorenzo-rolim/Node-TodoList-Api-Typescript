import { Request, Response } from "express";
import TodoModel from "../database/TodoModel";

const TodoController = {
  async index(req: Request, res: Response): Promise<Response> {
    let todos = await TodoModel.find().sort({ createdAt: -1 });

    return res.json(todos);
  },

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let todo = await TodoModel.findById(id);

    return res.json(todo);
  },

  async create(req: Request, res: Response): Promise<Response> {
    const { marca, modelo, versao, ano, quilometragem, tipoCambio, preco } =
      req.body;

    let todo = await TodoModel.create(req.body);

    return res.json(todo);
  },

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let todo = await TodoModel.findByIdAndUpdate(id, req.body);

    return res.json(todo);
  },

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let todo = await TodoModel.findByIdAndDelete(id);

    return res.json(todo);
  },
};

export default TodoController;

import { Request, Response } from "express";
import { ListBookService } from "../services/ListBookService";

class ListBookController {
  async handle(req: Request, res: Response) {
    const listBookService = new ListBookService();

    const books = await listBookService.execute();
    return res.json(books);
  }
}

export { ListBookController };

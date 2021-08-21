import { Request, Response } from "express";
import { ListBooksService } from "../services/ListBooksService";

class ListBookController {
  async handle(req: Request, res: Response) {
    const listBookService = new ListBooksService();

    const books = await listBookService.execute();
    return res.json(books);
  }
}

export { ListBookController };

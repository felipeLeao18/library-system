import { Request, Response } from "express";
import { DeleteBookService } from "../services/DeleteBookService";

class DeleteBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getBookService = new DeleteBookService();

    const deletedBook = await getBookService.execute(id);
    return res.json(deletedBook);
  }
}

export { DeleteBookController };

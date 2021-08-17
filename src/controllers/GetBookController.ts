import { Request, response, Response } from "express";
import { GetBookService } from "../services/GetBookService";

class GetBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getBookService = new GetBookService();

    const book = await getBookService.execute(id);
    return res.json(book);
  }
}

export { GetBookController };

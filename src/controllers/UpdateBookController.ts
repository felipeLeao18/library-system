import { Request, Response } from "express";
import { UpdateBookService } from "../services/UpdateBookService";

class UpdateBookController {
  async handle(req: Request, res: Response) {
    
    const { title, publisher, picture, authors } = req.body;
    const { id } = req.params;
    const updateBookService = new UpdateBookService();

    const updatedBook = await updateBookService.execute(id, {
      title,
      publisher,
      picture,
      authors,
    });

    return res.json(updatedBook);
  }
}

export { UpdateBookController };

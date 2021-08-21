import { Request,Response } from "express";
import { CreateBookService } from "../services/CreateBookService";


class CreateBookController{
    async handle(req: Request, res: Response){
      const {title, publisher, picture, authors} = req.body;
      const createBookService = new CreateBookService();
      const book = await createBookService.execute({title, publisher, picture, authors});
      return res.json(book)
    }
}

export {CreateBookController};
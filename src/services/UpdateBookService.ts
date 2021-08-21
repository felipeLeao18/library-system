import { getCustomRepository } from "typeorm";
import { BooksRepositories } from "../repositories/BooksRepositories";
import { GetBookService } from "./GetBookService";

class UpdateBookService {
  async execute(id: string, { title, publisher, picture, authors }) {
    const getBookService = new GetBookService();

    const isBook = await getBookService.execute(id);
    
    if (isBook) {
      const booksRepositories = getCustomRepository(BooksRepositories);
      await booksRepositories.update(id, {
        title: title,
        publisher: publisher,
        picture: picture,
        authors: authors,
      });
    }

    const newBook = await getBookService.execute(id);
    return newBook;
  }
}

export { UpdateBookService };

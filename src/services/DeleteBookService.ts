import { getCustomRepository } from "typeorm";
import { BooksRepositories } from "../repositories/BooksRepositories";
import { GetBookService } from "./GetBookService";

class DeleteBookService {
  async execute(id: string) {
    const getBookService = new GetBookService();
    const isBook = getBookService.execute(id);
    if (isBook) {
      const deletedBook = getBookService.execute(id);

      const booksRepositories = getCustomRepository(BooksRepositories);
      await booksRepositories.delete(id);

      return deletedBook;
    }
  }
}

export { DeleteBookService };

import { getCustomRepository } from "typeorm";
import { BooksRepositories } from "../repositories/BooksRepositories";

class GetBookService {
  async execute(id: string) {
    
    const booksRepositories = getCustomRepository(BooksRepositories);
    const book = await booksRepositories.findOne({
      where: {
        book_id: id,
      },
    });

    if (!book) throw new Error("Book does not exists");

    return book;
  }
}

export { GetBookService };

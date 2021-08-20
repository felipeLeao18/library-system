import { getCustomRepository } from "typeorm";
import { Book } from "../entities/Book";
import { BooksRepositories } from "../repositories/BooksRepositories";

interface IBookRequest {
  title: string;
  publisher: string;
  picture: string;
  authors: Array<string>;
}

class CreateBookService {
  async execute({ title, publisher, picture, authors }: IBookRequest) {
    const booksRepository = getCustomRepository(BooksRepositories);

    if (!title) throw new Error("Books's name can't be empty");

    const bookExists = await booksRepository.findOne({
      title,
    });
    if (bookExists) throw new Error("Book's already in the system");

    const book = booksRepository.create({
      title,
      publisher,
      picture,
      authors,
    });
    await booksRepository.save(book);
    return book;
  }
}

export { CreateBookService };

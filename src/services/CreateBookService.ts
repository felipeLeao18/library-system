import { getCustomRepository } from "typeorm";

import { BooksRepositories } from "../repositories/BooksRepositories";

interface IBookRequest {
  title: string;
  publisher: string;
  picture: string;
  authors: string[];
}

class CreateBookService {
  async execute({ title, publisher, picture, authors }: IBookRequest) {
  
    if (!title) throw new Error("Books's name can't be empty");

    const booksRepository = getCustomRepository(BooksRepositories);
    const bookExists = await booksRepository.findOne({
      where: {
        title: title
      }
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


export { CreateBookService, IBookRequest };


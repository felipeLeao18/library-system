import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { BooksRepositories } from "../repositories/BooksRepositories";

class ListBookService {
  async execute() {
    const booksRepositories = getCustomRepository(BooksRepositories);
    const books = await booksRepositories.find();

    return classToPlain(books);
  }
}

export { ListBookService };

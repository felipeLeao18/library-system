import {EntityRepository, Repository} from "typeorm";
import {Book} from "../entities/Book";

@EntityRepository(Book)
class BooksRepositories extends Repository<Book>{
  
}

export { BooksRepositories };

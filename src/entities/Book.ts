import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("books")
class Book {
  @PrimaryColumn()
  readonly book_id: string;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  picture: string;

  @Column("text", { array: true })
  authors: string[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  constructor() {
    if (!this.book_id) this.book_id = uuid();
  }
}

export { Book };

import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("books")
class Book {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  publisher: string;

  @Column()
  picture: string;

  @Column()
  authors: Array<string>;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export { Book };

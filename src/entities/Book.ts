import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("books")
class Book {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  picture: string;

  @Column("text", {array: true})
  authors: string[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  constructor(){
    if(!this.id) this.id = uuid();
  }
}

export { Book };

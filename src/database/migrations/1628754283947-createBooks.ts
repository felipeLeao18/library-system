import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBooks1628754283947 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"books",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "publisher",
                        type: "varchar",
                    },
                    {
                        name: "picture",
                        type: "varchar",
                    },
                       {
                           name: "authors",
                           isArray:true,
                           type: "varchar"
                       },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}

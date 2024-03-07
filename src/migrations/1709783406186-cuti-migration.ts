import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CutiMigration1709783406186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cuties",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "nik",
                        type: "integer",
                    },
                    {
                        name: "user_created",
                        type: "varchar",
                    },
                    {
                        name: "tanggal_mulai",
                        type: "date",
                    },
                    {
                        name: "tanggal_selesai",
                        type: "date",
                    },
                    {
                        name: "approval",
                        type: "integer",
                        isNullable: true,
                    },
                    {
                        name: "approval_date",
                        type: "date",
                    },
                    {
                        name: "keperluan",
                        type: "varchar",
                    },
                    {
                        name: "tipe",
                        type: "varchar",
                    },
                    {
                        name: "pengganti",
                        type: "varchar",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

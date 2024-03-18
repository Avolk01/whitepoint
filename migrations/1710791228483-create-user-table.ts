import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1710791228483 implements MigrationInterface {
    name = 'CreateUserTable1710791228483';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "whitepoint"."user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL, "email" character varying NOT NULL,
                "password" character varying NOT NULL, 
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "whitepoint"."user"`);
    }
}

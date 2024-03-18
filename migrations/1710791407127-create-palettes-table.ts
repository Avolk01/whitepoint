import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePalettesTable1710791407127 implements MigrationInterface {
    name = 'CreatePalettesTable1710791407127';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "whitepoint"."palette" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                "name" character varying NOT NULL, 
                "user_id" character varying NOT NULL, 
                CONSTRAINT "PK_157e30baa7d1e74102cd6e187e8" PRIMARY KEY ("id")
            )`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "whitepoint"."palette"`);
    }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateColorsTable1710791477010 implements MigrationInterface {
    name = 'CreateColorsTable1710791477010';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "whitepoint"."color" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                "palette_id" character varying NOT NULL, 
                "hex" character varying NOT NULL, 
                "name" character varying NOT NULL, 
                "user_id" character varying NOT NULL, 
                CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id")
            )`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "whitepoint"."color"`);
    }
}

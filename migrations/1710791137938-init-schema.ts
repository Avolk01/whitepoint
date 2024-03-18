import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1710791137938 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`create schema "whitepoint"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop schema "whitepoint"`);
    }
}

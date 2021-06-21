import {MigrationInterface, QueryRunner} from "typeorm";

export class kassaNumber1624266868469 implements MigrationInterface {
    name = 'kassaNumber1624266868469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cashiers_entity" DROP COLUMN "kassaNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cashiers_entity" ADD "kassaNumber" integer NOT NULL`);
    }

}

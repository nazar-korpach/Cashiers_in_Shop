import {MigrationInterface, QueryRunner} from "typeorm";

export class cashiers1624118284695 implements MigrationInterface {
    name = 'cashiers1624118284695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "cashiers_entity_sex_enum" AS ENUM('Male', 'Female')`);
        await queryRunner.query(`CREATE TYPE "cashiers_entity_position_enum" AS ENUM('Junior', 'Middle', 'Senior')`);
        await queryRunner.query(`CREATE TABLE "cashiers_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "sex" "cashiers_entity_sex_enum" NOT NULL, "age" integer NOT NULL, "yearOfExperience" integer NOT NULL, "previousExperience" text array NOT NULL, "workAdress" character varying NOT NULL, "kassaNumber" integer NOT NULL, "salary" integer NOT NULL, "position" "cashiers_entity_position_enum" NOT NULL, "workingDays" jsonb NOT NULL, CONSTRAINT "PK_027a252d56956633fa9827868b9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cashiers_entity"`);
        await queryRunner.query(`DROP TYPE "cashiers_entity_position_enum"`);
        await queryRunner.query(`DROP TYPE "cashiers_entity_sex_enum"`);
    }

}

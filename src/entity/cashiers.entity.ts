import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {CashiersPosition, Sex, WorkingDay} from '@srv/typing';

@Entity()
export class CashiersEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	surname: string;

	@Column('enum', {enum: Sex})
	sex: Sex;

	@Column()
	age: number;

	@Column()
	yearOfExperience: number;

	@Column({type: 'text', array: true})
	previousExperience: string[];

	@Column()
	workAdress: string;

	@Column()
	kassaNumber: number;

	@Column()
	salary: number;

	@Column('enum', {enum: CashiersPosition})
	position: CashiersPosition;

	@Column({type: 'jsonb'})
	workingDays: WorkingDay[];
}

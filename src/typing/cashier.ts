import {CashiersPosition, Sex, WorkingDay} from '@srv/typing';

export interface Cashier {
	name: string,
	surname: string,
	sex: Sex,
	age: number,
	yearOfExperience: number,
	previousExperience: string[],
	workAdress: string,
	salary: number,
	position: CashiersPosition,
	workingDays: WorkingDay[]
}

export interface CashierFindCondition {
	name?: string,
	surname?: string,
	sex?: Sex,
	age?: number,
	yearOfExperience?: number,
	workAdress?: string,
	salary?: number,
	position?: CashiersPosition
}
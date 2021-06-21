import {Cashier, CashiersPosition, Days, Sex} from '@srv/typing';

export const cashiers: Cashier[] = [
	{
		name: 'Cashier1',
		surname: 'Cashier1',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 2,
		previousExperience: ['Arsen'],
		workAdress: 'Shevchnca st, 100',
		salary: 10000,
		position: CashiersPosition.senior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Thursday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Wednesday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Thursday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Friday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
	{
		name: 'Cashier2',
		surname: 'Cashier2',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 1,
		previousExperience: ['Silpo'],
		workAdress: 'Shevchnca st, 100',
		salary: 10000,
		position: CashiersPosition.junior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Thursday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Wednesday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Thursday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Friday,
				startTime: '23:00',
				endTime: '07:00',
				kassaNumber: 3
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
	{
		name: 'Cashier3',
		surname: 'Cashier3',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 4,
		previousExperience: ['7/23'],
		workAdress: 'Shevchnca st, 100',
		salary: 10000,
		position: CashiersPosition.senior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Wednesday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Friday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
	{
		name: 'Cashier4',
		surname: 'Cashier4',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 3,
		previousExperience: ['Arsen'],
		workAdress: 'Shevchnca st, 10',
		salary: 10000,
		position: CashiersPosition.senior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Wednesday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Friday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
	{
		name: 'Cashier5',
		surname: 'Cashier5',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 0,
		previousExperience: ['Arsen'],
		workAdress: 'Shevchnca st, 10',
		salary: 10000,
		position: CashiersPosition.senior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Wednesday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Friday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
	{
		name: 'Cashier6',
		surname: 'Cashier6',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 8,
		previousExperience: ['Silpo'],
		workAdress: 'Shevchnca st, 10',
		salary: 10000,
		position: CashiersPosition.senior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Wednesday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Friday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
	{
		name: 'Cashier7',
		surname: 'Cashier7',
		sex: Sex.male,
		age: 34,
		yearOfExperience: 7,
		previousExperience: ['Arsen', '7/23'],
		workAdress: 'Shevchnca st, 10',
		salary: 10000,
		position: CashiersPosition.senior,
		workingDays: [
			{
				day: Days.Monday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Wednesday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Thursday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Friday,
				startTime: '07:00',
				endTime: '23:00',
				kassaNumber: 2
			},
			{
				day: Days.Saturday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			},
			{
				day: Days.Sunday,
				startTime: '25:00',
				endTime: '25:00',
				kassaNumber: -1
			}]
	},
];
import {MoreThan, Raw, getRepository} from 'typeorm';
import {And, ArrContains, Or} from '@srv/database/operators';
import {CashiersEntity} from '@srv/entity';
import {dayToIndex} from '@srv/helpers';
import {Cashier, CashierFindCondition, Days} from '@srv/typing';

export class CashiersService {
	async create(cashier: Cashier): Promise<void>{
		const repo = getRepository(CashiersEntity);
		repo.insert(cashier);
	}

	async find(cashierFindCondition: CashierFindCondition): Promise<CashiersEntity[]>{
		const repo = getRepository(CashiersEntity);
		return await repo.find({
			where: cashierFindCondition
		});
	}

	async findById(id: number): Promise<CashiersEntity>{
		const repo = getRepository(CashiersEntity);
		return await repo.findOne(id);
	}

	async update(id: number, cashier: Cashier): Promise<void>{
		const repo = getRepository(CashiersEntity);
		await repo.update(id, cashier);
	}

	async delete(id: number): Promise<void>{
		const repo = getRepository(CashiersEntity);
		await repo.delete(id);
	}

	async getTargetCashiers1(): Promise<CashiersEntity[]> {
		const repo = getRepository(CashiersEntity);
		const result = await repo.find({
			where: {
				yearOfExperience: MoreThan(5),
				previousExperience: Or(ArrContains('Silpo'),
					ArrContains('Arsen'))
			}
		});
		return result;
	}

	async getTargetCashiers2(): Promise<CashiersEntity[]> {
		const repo = getRepository(CashiersEntity);
		const dayID = dayToIndex(Days.Monday);
		const result = await repo.find({
			where: {
				workingDays: And(Raw(days => `${days} ->${dayID}->>'endTime' = '07:00'`) ,
					Raw(days => `${days} ->${dayID}->>'startTime' = '23:00'`),
					Raw(days => `CAST(${days} ->${dayID}->>'kassaNumber' AS INTEGER) % 2 = 1`)
				),
				workAdress: 'Shevchenko st, 100'
			}
		});
		return result;
	}

}
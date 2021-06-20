import {In, MoreThan, Raw, getRepository} from 'typeorm';
import {And, isOdd} from '@srv/database/operators';
import {CashiersEntity} from '@srv/entity';
import {dayToIndex} from '@srv/helpers';
import {Days} from '@srv/typing';

export class CashiersService {
	async getTargetCashiers1() {
		const repo = getRepository(CashiersEntity);
		const result = await repo.find({
			where: {
				yearOfExperience: MoreThan(5),
				previousExperience: In(['{Slpo}', '{Arsen}'])
			}
		});
		return result;
	}

	async getTargetCashiers2() {
		const repo = getRepository(CashiersEntity);
		const dayID = dayToIndex(Days.Monday);
		const result = await repo.find({
			where: {
				workingDays: And(Raw(days => `${days} ->${dayID}->>'endTime' = '18:00'`) ,
					Raw(days => `${days} ->${dayID}->>'startTime' = '09:00'`)),

				kassaNumber: isOdd(),
				workAdress: 'Shevchnca st, 100'
			}
		});
		return result;
	}

}
import {getRepository} from 'typeorm';
import {App} from '@srv/app';
import {CashiersEntity} from '@srv/entity';
import {Cashier} from '@srv/typing';
import {cashiers} from './dataset';

let app: App;

beforeAll(async () =>{
	app = new App();
	await app.start();
	const repo = getRepository(CashiersEntity);
	await repo.insert(cashiers);
});

afterAll(async ()=> {
	const repo = getRepository(CashiersEntity);
	await repo.createQueryBuilder().delete().execute();
});

describe('new app test', () =>{
	describe('TEST getTargetCashiers1', () =>{
		let result: Cashier[];
		it('should return 2 cashiers', async () =>{
			result = await app.getTargetCashiers1();
			expect(result).toHaveLength(2);
		});

		it('should have expected names', () =>{
			expect(result[0]).toHaveProperty('name');
			expect(result[0].name).toBe('Cashier6');
			expect(result[1]).toHaveProperty('name');
			expect(result[1].name).toBe('Cashier7');
		});
	});

	describe('TEST getTargetCashiers2', () =>{
		let result: Cashier[];
		it('should return 2 cashiers', async () =>{
			result = await app.getTargetCashiers2();
			expect(result).toHaveLength(2);
		});

		it('should have expected names', () =>{
			expect(result[0]).toHaveProperty('name');
			expect(result[0].name).toBe('Cashier1');
			expect(result[1]).toHaveProperty('name');
			expect(result[1].name).toBe('Cashier2');
		});
	});

	describe('TEST getAllCashiers', () =>{
		let result: Cashier[];
		it('should have right length', async () =>{
			result = await app.getAllCashiers();
			expect(result).toHaveLength(cashiers.length);
		});
		it('should have right names', () =>{
			result.forEach( (cashier, i) =>{
				expect(cashier.name).toBe(cashiers[i].name);
			});
		});
	});
});

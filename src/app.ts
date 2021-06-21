import {connect} from '@srv/database'
import {CashiersService} from '@srv/services'
import {Cashier} from '@srv/typing'


export class App {
	private cashiersService = new CashiersService()

	async start() {
		await connect()
	}

	async create(cashier: Cashier){
		this.cashiersService.create(cashier);
	}

	async getTargetCashiers2() {
		return await this.cashiersService.getTargetCashiers2()
	}

	async getTargetCashiers1() {
		return await this.cashiersService.getTargetCashiers1()
	}
}
/*
async function main() {
	const app = new App();
	await app.start()
	const result1 = await app.getTargetCashiers1();
	const result2 = await app.getTargetCashiers2();
	console.log('result 1 is', result1);
	// console.log('result 2 is', result2);
}

main()
*/
import {getConnectionManager} from 'typeorm';
import {CashiersEntity} from '@srv/entity';

export const connect = async () => {
	const connectionManager = getConnectionManager();

	const connection = connectionManager.create({
		type: 'postgres',
		entities: [CashiersEntity],
		url: 'postgres://postgres:postgres@localhost/cashiers_in_shop'
	});

	await connection.connect();
};

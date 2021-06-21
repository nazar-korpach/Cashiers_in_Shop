import {getConnectionManager} from 'typeorm';

export const connect = async () => {
	const connectionManager = getConnectionManager();

	const connection = connectionManager.create({
		type: 'postgres',
		entities: [__dirname + '/../**/**.entity{.ts,.js}'],
		url: 'postgres://postgres:postgres@localhost/cashiers_in_shop'
	});

	await connection.connect();
};

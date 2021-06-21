import {getConnectionManager} from 'typeorm';
import {POSTGRES_URL} from '@srv/configs';

export const connect = async () => {
	const connectionManager = getConnectionManager();

	const connection = connectionManager.create({
		type: 'postgres',
		entities: [__dirname + '/../**/**.entity{.ts,.js}'],
		ssl: true,
		synchronize: true,
		extra: {ssl: {
			rejectUnauthorized: false,
		}
		},
		url: POSTGRES_URL
	});

	await connection.connect().catch((error) => console.log(error));
};

import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car1', {
		color: 'red',
		year: 2023
	});
	await client.hSet('car2', {
		color: 'blue',
		year: 1929
	});
	await client.hSet('car3', {
		color: 'yellow',
		year: 1955
	});

	const commands = [1, 2, 3].map((id) => {
		return client.hGetAll('car' + id);
	});

	const results = await Promise.all(commands);

	console.log(results);
};
run();

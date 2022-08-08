import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import axios from 'axios';

export default function Index() {
	const data = useLoaderData();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export async function loader() {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		const data = await response.data;

		return json(data);
	} catch (error) {
		console.error(error);
		return json({});
	}
}

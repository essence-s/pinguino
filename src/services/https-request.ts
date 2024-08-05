import { DOMAIN } from '@/constants/domains';
import { MICROSERVICES } from '@/constants/microservices';
import {
	ENDPOINT_VERSION,
	TYPE_ENDPOINT_VERSION,
} from '@/constants/request-endpoint';
import { HttpRequestParam } from '@/interfaces/http-request';

// const url = process.env.NEXT_PUBLIC_BASE_URL;

export const httpsRequest = () => {
	let https = 'https://';
	// let microservice: string | undefined = MICROSERVICES.BASE;
	let version: TYPE_ENDPOINT_VERSION | undefined = ENDPOINT_VERSION.v2;
	let endpoint = '';
	let headers: Record<string, string> | undefined = {
		'Content-Type': 'application/json',
	};

	const configRequest = (param: HttpRequestParam) => {
		// const {
		// 	headers,
		// 	version = ENDPOINT_VERSION.v1,
		// 	microservice = MICROSERVICES.BASE,
		// 	endpoint,
		// } = param;

		// if (microservice) microservice = param.microservice;
		if (param.headers) headers = param.headers;
		if (param.version) version = param.version;

		endpoint = param.endpoint;
	};

	const urlBuilder = () => {
		return `${https}${DOMAIN}/api/${version}/${endpoint}`;
	};

	async function get<T>(): Promise<T> {
		console.log(urlBuilder());
		const response = await fetch(urlBuilder());
		const dataF = await response.json();
		return dataF;
		// return {
		// 	name: dataF.name,
		// 	img: dataF.sprites.front_default,
		// };
	}

	return {
		configRequest,
		urlBuilder,
		get,
	};
};

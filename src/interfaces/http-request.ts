import { TYPE_ENDPOINT_VERSION } from '@/constants/request-endpoint';

export interface HttpRequestParam {
	https?: string;
	// microservice?: string;
	version?: TYPE_ENDPOINT_VERSION;
	endpoint: string;
	headers?: Record<string, string>;
}

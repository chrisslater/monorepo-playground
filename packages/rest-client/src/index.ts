import AxiosResponse from 'axios';
import axios, {
	AxiosResponse,
	AxiosStatic,
} from 'axios'

export interface IRestResponse extends AxiosResponse {

}

export interface IOptions {
	prefix?: string
	client?: AxiosStatic
}

export interface IRestClient {
	get(url: string): Promise<IRestResponse>
}

export class RestClient implements IRestClient {
	protected client: AxiosStatic
	protected prefix: string

	constructor({
		client = axios,
		prefix = '',
	}: IOptions) {
		this.client = client
		this.prefix = prefix
	}

	public async get(url: string): Promise<IRestResponse> {
		return await this.client.get(url)
	}
}

const restClientFactory = (options: IOptions) => new RestClient(options)

export default restClientFactory

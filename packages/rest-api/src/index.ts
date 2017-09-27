import axios, { AxiosStatic } from 'axios'

export interface IRestResponse extends AxiosStatic {

}

export interface IRestApi {
	get(uri: string): Promise<IRestResponse>
}

export class RestClient {
	protected client: IRestApi

	constructor(client: IRestApi) {
		this.client = client
	}

	public async get(url: string) {
		return await this.client.get(url)
	}
}

export default RestClient

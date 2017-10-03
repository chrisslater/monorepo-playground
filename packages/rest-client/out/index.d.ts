import { AxiosStatic } from 'axios';
export interface IRestResponse {
}
export interface IOptions {
    prefix?: string;
    client?: AxiosStatic;
}
export interface IRestClient {
    get(url: string): Promise<IRestResponse>;
}
export declare class RestClient implements IRestClient {
    protected client: AxiosStatic;
    protected prefix: string;
    constructor({client, prefix}: IOptions);
    get(url: string): Promise<IRestResponse>;
}
declare const restClientFactory: (options: IOptions) => RestClient;
export default restClientFactory;

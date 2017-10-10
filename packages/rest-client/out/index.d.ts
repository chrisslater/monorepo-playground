import { AxiosStatic } from 'axios';
export interface IRestResponse<T> {
    
}
export interface IOptions {
    prefix?: string;
    client?: AxiosStatic;
}
export interface IRestClient {
    get<T>(url: string): Promise<IRestResponse<T>>;
}
export declare class RestClient implements IRestClient {
    protected client: AxiosStatic;
    protected prefix: string;
    constructor({client, prefix}: IOptions);
    get<T>(url: string): Promise<IRestResponse<T>>;
}
declare const restClientFactory: (options: IOptions) => RestClient;
export default restClientFactory;

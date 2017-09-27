import { AxiosStatic } from 'axios';
export interface IRestResponse extends AxiosStatic {
}
export interface IRestApi {
    get(uri: string): Promise<IRestResponse>;
}
export declare class RestClient {
    protected client: IRestApi;
    constructor(client: IRestApi);
    get(url: string): Promise<IRestResponse>;
}
export default RestClient;

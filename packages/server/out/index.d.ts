/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
/// <reference types="koa-router" />
import * as Koa from 'koa';
import * as Router from 'koa-router';
export declare type IMethod = 'get' | 'post' | 'put' | 'del';
export interface IContext extends Koa.Context {
}
export interface IHandler extends Router.IMiddleware {
}
export interface IRoute {
    method: IMethod;
    path: string;
    handler: IHandler;
}
export declare type ICallback = () => void;
export interface IServer {
    routes(routes: IRoute[]): void;
    route(route: IRoute): void;
    get(path: string, handler: IHandler): void;
    post(path: string, handler: IHandler): void;
    listen(port?: number, callback?: ICallback): void;
}
export declare class Server implements IServer {
    protected server: Koa;
    protected router: Router;
    constructor();
    routes(routes: IRoute[]): void;
    route({method, path, handler}: IRoute): void;
    get(path: string, handler: IHandler): void;
    post(path: string, handler: IHandler): void;
    listen(port?: number, callback?: ICallback): void;
}
export declare function serverFactory(): Server;
export default serverFactory;

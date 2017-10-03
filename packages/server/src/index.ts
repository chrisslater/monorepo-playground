import * as Koa from 'koa'
import bodyParser = require('koa-bodyparser')
import * as Router from 'koa-router'

export type IMethod = 'get' | 'post' | 'put' | 'del'

export interface IContext extends Koa.Context { }

export interface IHandler extends Router.IMiddleware { }

export interface IRoute {
	method: IMethod
	path: string
	handler: IHandler
}

export interface IServer {
	routes(routes: IRoute[]): void
	route(route: IRoute): void
	get(path: string, handler: IHandler): void
	post(path: string, handler: IHandler): void
	listen(port: number): void
}

export class Server implements IServer {
	protected server: Koa
	protected router: Router

	constructor() {
		this.server = new Koa()
		this.router = new Router()
	}

	public routes(routes: IRoute[]): void {
		routes.forEach((route: IRoute) =>
			this.route(route))
	}

	public route({ method, path, handler }: IRoute): void {
		this.router[method](path, handler)
	}

	public get(path: string, handler: IHandler): void {
		this.router.get(path, handler)
	}

	public post(path: string, handler: IHandler): void {
		this.router.post(path, handler)
	}

	public listen(port: number = 3000): void {
		this.server.use(bodyParser())
		this.server.use(this.router.routes())
		this.server.use(this.router.allowedMethods())

		this.server.listen(port)
	}
}

export function serverFactory() {
	return new Server()
}

export default serverFactory

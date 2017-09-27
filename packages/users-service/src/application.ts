import { inject, injectable } from 'inversify'

import * as Koa from 'koa'
import bodyParser = require('koa-bodyparser')
import * as Router from 'koa-router'

import { Types } from './types'

interface IApplication {
	run(): void
}

type IServerFunc = (type: any) => any

interface IServer {
	listen(port: number): void
	use(serverFunc: IServerFunc): void
}

@injectable()
export class Application implements IApplication {
	protected server: IServer
	protected router: Router

	constructor() {
		this.server = new Koa()
		this.router = new Router()
	}

	public run(): void {
		this.server.use(bodyParser())

		this.router.get('/users', async (ctx) => ctx.body = 'awesome')

		this.server.use(this.router.routes())
		this.server.use(this.router.allowedMethods())

		this.server.listen(3000)
	}
}

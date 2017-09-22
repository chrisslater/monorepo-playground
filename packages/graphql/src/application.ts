
import * as Graphql from 'graphql'
import { inject, injectable } from 'inversify'

import * as Koa from 'koa'
import bodyParser = require('koa-bodyparser')
import * as Router from 'koa-router'

import {
	IApplication,
	IRootQuerySchema,
	Types,
} from './types'

@injectable()
export class Application implements IApplication {
	protected rootQuerySchema: IRootQuerySchema
	protected server: Koa
	protected router: Router

	constructor(
		@inject(Types.RootQuerySchema) rootQuerySchema: IRootQuerySchema,
	) {
		this.rootQuerySchema = rootQuerySchema
		this.server = new Koa()
		this.router = new Router()
	}

	public run(): void {
		this.server.use(bodyParser())

		this.router.post('', async (ctx) => {
			const query = ctx.request && ctx.request.body && ctx.request.body.query

			ctx.body = await Graphql.graphql(this.rootQuerySchema.schema, query)
		})

		this.server.use(this.router.routes())
		this.server.use(this.router.allowedMethods())

		this.server.listen(3000)
	}
}

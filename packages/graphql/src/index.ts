import * as Graphql from 'graphql'
import server, { IContext } from 'server'

import schema from './schema'

const app = server()

app.post('', async (ctx: IContext) => {
	const query = ctx.request && ctx.request.body && ctx.request.body.query

	ctx.body = await Graphql.graphql(schema, query)
})

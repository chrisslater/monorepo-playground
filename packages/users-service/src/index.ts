import server, { IContext } from 'server'
import db from './db'

import logger from 'snapperfish-logger'

const log = logger({
	name: 'users-service',
})

log.info('logging the things')

const app = server()
const context = db()

app.get('/users', async (ctx: IContext) => {
	ctx.body = await context.getUsers()
})

app.listen(undefined, () => console.log('Running...'))

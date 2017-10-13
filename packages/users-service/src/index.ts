import server, { IContext } from 'server'
import db from './db'

const app = server()
const context = db()

app.get('/', async (ctx: IContext) => {
	ctx.body = await context.getUsers()
})

app.listen(undefined, () => console.log('Running...'))

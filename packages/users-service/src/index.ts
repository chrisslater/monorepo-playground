import server, { IContext } from 'server'
import db from './db'

const app = server()
const context = db()

app.get('/', (ctx: IContext) => {
	ctx.body = context.users
})

app.listen()

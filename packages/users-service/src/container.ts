import { Container } from 'inversify'

import * as Koa from 'koa'

import { DbContext } from './db'
import { UsersRepository } from './repositories'
import { RootQuerySchema, UsersSchema } from './schema'
import {
	IDbContext,
	IRootQuerySchema,
	IUsersRepository,
	IUsersSchema,
	Types,
} from './types'

export const container = new Container()
export default container

container.bind<IDbContext>(Types.DbContext).to(DbContext)
container.bind<IUsersRepository>(Types.UsersRepository).to(UsersRepository)

container.bind<Koa>(Types.Server).to(Koa)

import { Container } from 'inversify'

import { Application } from './application'
import { DbContext } from './db'
import { UsersRepository } from './repositories'
import { RootQuerySchema, UsersSchema } from './schema'
import {
	IApplication,
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
container.bind<IUsersSchema>(Types.UsersSchema).to(UsersSchema)
container.bind<IRootQuerySchema>(Types.RootQuerySchema).to(RootQuerySchema)
container.bind<IApplication>(Types.Application).to(Application)

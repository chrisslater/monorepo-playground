import * as Graphql from 'graphql'

export interface IDbContext {
	users: Lowdb.Lowdb
}

type IUserByNameResolverFunc = (root: any, args: { name: string }) => IUser

export interface IRootQuerySchema {
	schema: Graphql.GraphQLSchema
}

export interface IApplication {
	run(): void
}

interface ITypes {
	[prop: string]: symbol
}

function createTypes(typeStrings: string[]): ITypes {
	const types: ITypes = {}

	typeStrings.forEach((type: string) => types[type] = Symbol(type))

	return types
}

export const Types = createTypes([
	'UsersRepository',
	'DbContext',
	'Server',
	'Application',
	'UsersSchema',
	'RootQuerySchema',
])

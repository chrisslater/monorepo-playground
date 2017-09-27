import * as Graphql from 'graphql'

export interface IUser {
	id: string
	name: string
	nationality: string
}

export interface IDbContext {
	users: Lowdb.Lowdb
}

export interface IUsersRepository {
	getUserByName(name: string): IUser
	getUsers(): IUser[]
}

type IUserByNameResolverFunc = (root: any, args: { name: string }) => IUser

export interface IUsersSchemaFields {
	users: Graphql.GraphQLFieldConfig<any, any>
	userByName: Graphql.GraphQLFieldConfig<any, any>
}

export interface IUsersMutationFields {
	createUser: Graphql.GraphQLFieldConfig<any, any>
}

export interface IUsersSchema {
	schema: IUsersSchemaFields,
	mutations?: IUsersMutationFields,
}

export interface IRootQuerySchema {
	schema: Graphql.GraphQLSchema
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

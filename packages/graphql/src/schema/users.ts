import * as Graphql from 'graphql'
import { usersRepository } from '../repositories'

const usersRepo = usersRepository()

export interface IUsersSchemaFields {
	users: Graphql.GraphQLFieldConfig<any, any>
	userByName: Graphql.GraphQLFieldConfig<any, any>
}

export interface IUser {
	name: string,
	nationality: string
}

// export interface IUsersMutationFields {
// 	createUser: Graphql.GraphQLFieldConfig<any, any>
// }

export const UserType = new Graphql.GraphQLObjectType({
	name: 'User',
	fields: {
		id: {
			type: Graphql.GraphQLString,
		},
		name: {
			type: Graphql.GraphQLString,
		},
		nationality: {
			type: Graphql.GraphQLString,
		},
	},
})

export const UserInputType = new Graphql.GraphQLObjectType({
	name: 'UserInput',
	fields: {
		id: {
			type: Graphql.GraphQLString,
		},
		name: {
			type: Graphql.GraphQLString,
		},
		nationality: {
			type: Graphql.GraphQLString,
		},

	},
})

const userByName = {
	name: 'User',
	description: 'User',
	args: {
		name: {
			name: 'name',
			type: Graphql.GraphQLString,
		},
	},
	type: UserType,
	resolve: async (root: any, args: { name: string }): Promise<IUser> =>
		await usersRepo.getUserByName(args.name),
}

const users = {
	description: 'Users',
	type: new Graphql.GraphQLList(UserType),
	resolve: async (): Promise<IUser[]> =>
		await usersRepo.getUsers(),
}

const userFields: IUsersSchemaFields = {
	users,
	userByName,
}

export default userFields

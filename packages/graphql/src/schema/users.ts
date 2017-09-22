import * as Graphql from 'graphql'
import { inject, injectable } from 'inversify'
import {
	IUser,
	IUsersMutationFields,
	IUsersRepository,
	IUsersSchema,
	IUsersSchemaFields,
	Types,
} from '../types'

const UserType = new Graphql.GraphQLObjectType({
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

const UserInputType =  new Graphql.GraphQLObjectType({
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

@injectable()
export class UsersSchema implements IUsersSchema {
	protected usersRepository: IUsersRepository

	constructor(
		@inject(Types.UsersRepository) usersRepository: IUsersRepository,
	) {
		this.usersRepository = usersRepository
	}

	// @todo Add UserType and UserInputType
	// get mutations(): IUsersMutationFields {
	// 	const createUser = {
	// 		type: UserType,
	// 		description: 'Create a new User',
	// 		args: {
	// 			user: { type: UserInputType }
	// 		},
	// 		resolve: (value, { user }) => {
	// 			return ArticleServices.createArticle(user);
	// 		}
	// 	}

	// 	return { createUser }
	// }

	get schema(): IUsersSchemaFields {
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
			resolve: (root: any, args: { name: string }): IUser =>
				this.usersRepository.getUserByName(args.name),
		}

		const users = {
			description: 'Users',
			type: new Graphql.GraphQLList(UserType),
			resolve: (): IUser[] => {
				const result = this.usersRepository.getUsers()
				return result
			},
		}

		return { users, userByName }
	}
}

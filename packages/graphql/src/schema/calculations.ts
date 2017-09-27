import * as Graphql from 'graphql'
import { inject, injectable } from 'inversify'
import {
	ICalculationsSchema,
	ICalculationsSchemaFields,
	Types,
} from '../types'

import { add } from 'package-three'

const UserInputType = new Graphql.GraphQLObjectType({
	name: 'CalculationsInput',
	fields: {
		numberOne: {
			type: Graphql.GraphQLInt,
		},
		numberTwo: {
			type: Graphql.GraphQLString,
		},
	},
})

@injectable()
export class CalculationsSchema implements ICalculationsSchema {

	constructor(
		@inject(Types.UsersRepository) usersRepository: IUsersRepository,
	) {
		this.usersRepository = usersRepository
	}

	get schema(): ICalculationsSchemaFields {
		const addTwoNumbers = {
			name: 'User',
			description: 'User',
			args: {
				numberOne: {
					name: 'numberOne',
					type: Graphql.GraphQLInt,
				},

				numberTwo: {
					name: Graphql.GraphQLInt,
				}
			},
			type: UserType,
			resolve: (root: any, args: { name: string }): IUser =>
				,
		}

		return { addTwoNumbers }
	}
}

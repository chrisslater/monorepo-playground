import * as Graphql from 'graphql'
import {
	inject,
	injectable,
} from 'inversify'
import { container } from '../container'
import { IUsersSchema, Types } from '../types'

export { UsersSchema } from './users'

@injectable()
export class RootQuerySchema {
	protected usersSchema: IUsersSchema

	constructor(
		@inject(Types.UsersSchema) usersSchema: IUsersSchema,
	) {
		this.usersSchema = usersSchema
	}

	get schema(): Graphql.GraphQLSchema {
		const query = new Graphql.GraphQLObjectType({
			name: 'RootQueryType',
			fields: {
				...this.usersSchema.schema,
			},
		})

		// var MutationType = new Graphql.GraphQLObjectType({
		// 	name: 'GraphQL Mutations',
		// 	description: 'These are the things we can change',
		// 	fields: () => ({
		// 		...this.usersSchema.mutations,
		// 	}),
		// });

		return new Graphql.GraphQLSchema({ query })
	}
}

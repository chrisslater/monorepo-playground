import * as Graphql from 'graphql'

import usersSchema from './users'

const query = new Graphql.GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...usersSchema,
	},
})

const schema = new Graphql.GraphQLSchema({ query })

export default schema

import * as React from 'react'
import { gql, graphql, QueryProps } from 'react-apollo'

interface IQuery<T> {
	data: T
}

interface IUsers {
	users: IUser[]
}

interface IUser {
	name: string
	nationality: string
}

interface IUserQuery extends IUser {
	id: string
}

const User: React.SFC<IUser> = ({ name, nationality }) => (
	<div>
		<div>{name}</div>
		<div>{nationality}</div>
	</div>
)

type WrappedProps = IUsers & QueryProps

const Users: React.SFC<IQuery<WrappedProps>> = ({ data: { users } }) => (
	<div data-test="users">
		{users && users.map((user: IUserQuery) => (<User key={user.id} name={user.name} nationality={user.nationality} />))}
	</div>
)

export default graphql<IUsers>(gql`
	query UsersQuery {
		users {
			id
			name
			nationality
		}
	}
`)(Users)

import restClient, { IRestClient } from 'rest-client'
import { IRestClient } from '../../../rest-client/src/index';

export interface IUserDto {
	id: string
	name: string
	nationality: string
}

export interface IUsersRepository {
	getUserByName(name: string): IUserDto
	getUsers(): Promise<IUserDto[]>
}

// type IUsersConstructor = (prefix: string, options: IRestClient) => IUsersRepository

class UsersRepository implements IUsersRepository {
	protected client: IRestClient

	constructor(client: IRestClient) {
		this.client = client
	}

	public getUserByName(name: string): IUserDto {
		return this.context.users
			.find({ name })
			.value<IUserDto>()
	}

	public async getUsers(): Promise<IUserDto[]> {
		return await this.client.get('users')
	}
}

const usersRepositoryFactory = () => {
	const client = restClient({
		prefix: 'http://users-service:3000/',
	})

	return new UsersRepository(client)
}

export default usersRepositoryFactory

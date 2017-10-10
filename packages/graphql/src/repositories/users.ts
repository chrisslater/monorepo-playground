import restClient, { IRestClient } from 'rest-client'

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
	constructor(
		protected client: IRestClient,
	) {}

	public async getUserByName(name: string): IUserDto {
		this.client.get(`users/${name}`)
	}

	public async getUsers(): Promise<IUserDto[]> {
		try {
			const { data }: { data: IUserDto[] } = await this.client.get<IUserDto[]>('users')
			return data
		} catch (e) {
			console.log(e)
		}
	}
}

const usersRepositoryFactory = () => {
	const client = restClient({
		prefix: 'http://users-service:3000/',
	})

	return new UsersRepository(client)
}

export default usersRepositoryFactory

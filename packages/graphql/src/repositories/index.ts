import {
	inject,
	injectable,
} from 'inversify'
import 'reflect-metadata'
import {
	IDbContext,
	IUser,
	IUsersRepository,
	Types,
} from '../types'

@injectable()
export class UsersRepository implements IUsersRepository {
	protected context: IDbContext

	constructor(
		@inject(Types.DbContext) context: IDbContext,
	) {
		this.context = context
	}

	public getUserByName(name: string): IUser {
		return this.context.users
			.find({ name })
			.value<IUser>()
	}

	public getUsers(): IUser[] {
		return this.context.users.value<IUser[]>()
	}
}

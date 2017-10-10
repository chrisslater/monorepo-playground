import Low = require('lowdb')
import path = require('path')

import FileSync = require('lowdb/adapters/FileSync')

export interface IUser {
	id: string
	name: string
	nationality: string
}

export interface IDbContext {
	get<TResult>(str: string): this
	value<TResult>(): TResult
}

export interface IDb {
	getUsers(): IUser[]
}

export class Db implements IDb {
	constructor(
		protected context: IDbContext,
	) { }

	public getUsers(): IUser[] {
		return this.context.get<IUser>('users').value()
	}
}

const filePath = path.resolve(__dirname, '../db.json')
const adapter = new FileSync(filePath)

const dbFactory = (
	context = new Low(adapter),
) => new Db(context)

export default dbFactory

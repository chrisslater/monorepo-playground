import Lowdb = require('lowdb')
import path = require('path')

const filePath = path.resolve(__dirname, '../db.json')

export interface IDbContext {
	users: Lowdb.Lowdb
}

export class DbContext implements IDbContext {
	protected context: Lowdb.Lowdb

	constructor() {
		this.context = new Lowdb(filePath)
	}

	get users() {
		return this.context.get('users')
	}
}

const dbFactory = () => new DbContext()

export default dbFactory

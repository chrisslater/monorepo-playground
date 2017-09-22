import { injectable } from 'inversify'
import Lowdb = require('lowdb')

import path = require('path')
import { IDbContext } from './types'

const filePath = path.resolve(__dirname, '../db.json')

@injectable()
export class DbContext implements IDbContext {
	protected context: Lowdb.Lowdb

	constructor() {
		this.context = new Lowdb(filePath)
	}

	get users() {
		return this.context.get('users')
	}
}

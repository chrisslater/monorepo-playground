import * as Koa from 'koa'
import bodyParser = require('koa-bodyparser')
import * as Router from 'koa-router'
import Lowdb = require('lowdb')

import path = require('path')

const filePath = path.resolve(__dirname, '../db.json')

export class DbContext implements IDbContext {
	protected context: Lowdb.Lowdb

	constructor() {
		this.context = new Lowdb(filePath)
	}

	get users() {
		return this.context.get('users')
	}
}

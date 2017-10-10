declare module 'lowdb' {
	import FileSync = require('lowdb/adapters/FileSync')

	class Lowdb {
		constructor(adapter: FileSync)

		get<TResult>(str: string): this
		value<TResult>(): TResult
	}

	export = Lowdb
}

declare module 'lowdb/adapters/FileSync' {
	class FileSync {
		constructor(filePath: string)
	}

	export = FileSync
}


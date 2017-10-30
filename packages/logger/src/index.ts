import {
	BunyanLogger as _BunyanLogger,
	createBunyanLogger,
	ICreateLoggerOptions,
	ILogger,
} from './loggers/BunyanLogger'

const loggerFactory = (options: ICreateLoggerOptions): ILogger =>
	createBunyanLogger(options)

export const BunyanLogger = _BunyanLogger

export default loggerFactory

import * as bunyan from 'bunyan'

export type LogFunction = () => void

export interface ILogger {
	info: LogFunction
}

export interface ICreateLoggerOptions {
	name: string
}

export interface ILoggerCreater {
	createLogger(options: ICreateLoggerOptions): ILogger
}

export class BunyanLogger implements ILogger {
	protected logger: ILogger

	constructor(logger: ILogger) {
		this.logger = logger
	}

	public info(log): void {
		this.logger.info(log)
	}
}

export const createBunyanLogger = (options: ICreateLoggerOptions) =>
	new BunyanLogger(bunyan.createLogger(options))

export default createBunyanLogger

import * as path from 'path'
import * as yml from 'yamljs'
import { IContainer } from './helpers'

export interface ISourceInput {
	containers: IContainer[]
}

export function createSourceConfig(src: string): ISourceInput {
	const sourceFilePath = path.join(process.cwd(), src)
	return yml.load(sourceFilePath)
}

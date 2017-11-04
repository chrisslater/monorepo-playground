import * as path from 'path'
import * as yml from 'yamljs'
import { IDefaults } from './helpers'

const DEFAULT_FILE = 'defaults.yml'

export function createDefaultConfig(src?: string): IDefaults {
	let root: string = path.join(__dirname, '..')
	let filePath = DEFAULT_FILE

	if (src) {
		root = process.cwd()
		filePath = src
	}

	const sourceFilePath = path.join(root, filePath)
	return yml.load(sourceFilePath)
}

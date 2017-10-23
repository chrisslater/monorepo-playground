import * as fs from 'fs'
import * as nun from 'nunjucks'
import * as path from 'path'
import * as yml from 'yamljs'

import {
	createContainerConfig,
	IDefaults,
} from './helpers'

const DEFAULT_YML_FILE = 'defaults.yml'
const SOURCE_YML_FILE = 'in.yml'
const TEMPLATE_PATH = 'templates'
const DESTINATION_DIRECTORY = 'kube_scripts'

const template = path.join(__dirname, '..', TEMPLATE_PATH, 'deployment.yml.template')
const defaultFile = path.join(__dirname, '..', DEFAULT_YML_FILE)
const sourceFile = path.join(__dirname, '..', SOURCE_YML_FILE)

const DEPLOYMENT_TEMPLATE = fs.readFileSync(template, 'utf8')
const DEFAULTS: IDefaults = yml.load(defaultFile)
const SOURCE = yml.load(sourceFile)

export function ensureDirectoryExistence(dirname: string) {
	// const dirname = path.dirname(filePath)
	if (fs.existsSync(dirname)) {
		return true
	}

	fs.mkdirSync(dirname)
	ensureDirectoryExistence(dirname)
}

try {
	// Ensure destination folder exists
	const destinationDirectory = path.join(__dirname, '..', DESTINATION_DIRECTORY)
	ensureDirectoryExistence(destinationDirectory)

	// Merge default config with container config
	createContainerConfig(SOURCE.containers, DEFAULTS, (config) => {
		// Create file from config
		const file = nun.renderString(DEPLOYMENT_TEMPLATE, config)

		// Write file to directory
		fs.writeFileSync(`${destinationDirectory}/${config.name}-deployment.yml`, file)
	})
} catch (e) {
	console.log('Error:', e.stack)
}

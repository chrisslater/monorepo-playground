import * as fs from 'fs'
import * as nun from 'nunjucks'
import * as path from 'path'
import * as yml from 'yamljs'

import {
	createContainerConfig,
	IContainer,
	IDefaults,
} from './helpers'

import { createDefaultConfig } from './createDefaultConfig'
import { createSourceConfig } from './createSourceConfig'

const CWD = process.cwd()
const DEFAULT_YML_FILE = 'defaults.yml'
const SOURCE_YML_FILE = 'in.yml'
const TEMPLATE_PATH = 'templates'
const DESTINATION_DIRECTORY = 'kube_scripts'

const template = path.join(__dirname, '..', TEMPLATE_PATH, 'deployment.yml.template')

const DEPLOYMENT_TEMPLATE = fs.readFileSync(template, 'utf8')

export function ensureDirectoryExistence(dirname: string) {
	// const dirname = path.dirname(filePath)
	if (fs.existsSync(dirname)) {
		return true
	}

	fs.mkdirSync(dirname)
	ensureDirectoryExistence(dirname)
}

export function createKubernetesScripts(containers: IContainer[], defaults: IDefaults) {
	try {
		// Ensure destination folder exists
		const destinationDirectory = path.join(CWD, DESTINATION_DIRECTORY)
		ensureDirectoryExistence(destinationDirectory)

		// Merge default config with container config
		createContainerConfig(containers, defaults, (config) => {
			// Create file from config
			const file = nun.renderString(DEPLOYMENT_TEMPLATE, config)

			// Write file to directory
			fs.writeFileSync(`${destinationDirectory}/${config.name}-deployment.yml`, file)
		})
	} catch (e) {
		console.log('Error:', e.stack)
	}
}

// Make this async
export function createConfig(src: string, def?: string): void {
	const srcFile = createSourceConfig(src)
	const defaultFile = createDefaultConfig(def)

	createKubernetesScripts(srcFile.containers, defaultFile)
}

export function createDockerComposeFile(src: string, def?: string): void {
	const srcFile = createSourceConfig(src)
	const defaultFile = createDefaultConfig(def)

	const config = createContainerConfig(srcFile.containers, defaultFile)

	// Ensure destination folder exists
	const destinationDirectory = path.join(CWD)

	const templatePath = path.join(__dirname, '..', TEMPLATE_PATH, 'compose.yml.template')
	const tpl = fs.readFileSync(templatePath, 'utf8')

	// Create file from config
	const file = nun.renderString(tpl, { containers: config })

	// Write file to directory
	fs.writeFileSync(`${destinationDirectory}/test.dc.dev.yml`, file)
}

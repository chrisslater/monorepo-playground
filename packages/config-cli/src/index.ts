import * as fs from 'fs'
import * as nun from 'nunjucks'
import * as path from 'path'
import * as yml from 'yamljs'

type ContainerType = 'ts'

interface ITsConfig {
	type: ContainerType
	image: string
	command: string[]
	ports: IPortVars[]
}

interface IContainerTypes {
	ts: ITsConfig
}

interface IVolume {
	name: string
	mount: string
	path: string
}

interface ISharedConfig {
	volumes: IVolume[]
}

interface IDefaults {
	shared: ISharedConfig
	containers: IContainerTypes
}

interface IEnvPairs {
	name: string
	value: string
}

interface IPortVars {
	name: string
	port: number
	containerPort: number
	nodePort?: number
	protocol?: string
}

interface IContainer {
	name: string
	type: ContainerType
	env: IEnvPairs[]
	ports: IPortVars[]
}

const DEFAULT_YML_FILE = 'defaults.yml'
const SOURCE_YML_FILE = 'in.yml'
const TEMPLATE_PATH = 'templates'
const DESTINATION_DIRECTORY = 'kube_scripts'

const template = path.join(__dirname, '..', TEMPLATE_PATH, 'deployment.yml.template')
const defaultFile = path.join(__dirname, '..', DEFAULT_YML_FILE)
const sourceFile = path.join(__dirname, '..', SOURCE_YML_FILE)
const destinationDirectory = path.join(__dirname, '..', DESTINATION_DIRECTORY)

const DEPLOYMENT_TEMPLATE = fs.readFileSync(template, 'utf8')
const DEFAULTS: IDefaults = yml.load(defaultFile)
const SOURCE = yml.load(sourceFile)

function ensureDirectoryExistence(dirname: string) {
	// const dirname = path.dirname(filePath)
	if (fs.existsSync(dirname)) {
		return true
	}

	fs.mkdirSync(dirname)
	ensureDirectoryExistence(dirname)
}

function processContainers(containers: IContainer[]) {
	ensureDirectoryExistence(destinationDirectory)

	return containers.map((container) => processContainer(container))
}

function processContainer(container: IContainer) {
	const defaultContainer = DEFAULTS.containers[container.type]
	const variables = Object.assign({}, DEFAULTS.shared, defaultContainer, container)

	if (Array.isArray(container.ports) && container.ports.length > 0) {
		variables.ports = variables.ports.concat(defaultContainer.ports)
	}

	console.log(variables)

	const file = nun.renderString(DEPLOYMENT_TEMPLATE, variables)

	fs.writeFileSync(`${destinationDirectory}/${variables.name}-deployment.yml`, file)
}

try {
	processContainers(SOURCE.containers)
} catch (e) {
	console.log('Error:', e.stack)
}

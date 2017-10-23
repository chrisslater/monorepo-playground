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

export interface IDefaults {
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

type IContainerConfig = ITsConfig
type IMergedConfig = ISharedConfig & IContainerConfig & IContainer

function mergeConfig(container: IContainer, defaults: IDefaults): IMergedConfig {
	const defaultContainer = defaults.containers[container.type]
	const variables = Object.assign({}, defaults.shared, defaultContainer, container)

	if (Array.isArray(container.ports) && container.ports.length > 0) {
		variables.ports = variables.ports.concat(defaultContainer.ports)
	}

	return variables
}

type Callback = (config: IMergedConfig) => void

export function createContainerConfig(
	containers: IContainer[],
	defaults: IDefaults,
	callback?: Callback,
): IMergedConfig[] {
	return containers.map((container) => {
		const config = mergeConfig(container, defaults)
		callback(config)
		return config
	})
}

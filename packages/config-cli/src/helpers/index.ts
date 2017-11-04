type ContainerType = 'ts'

interface ITsConfig {
	// type: ContainerType
	image: string
	command: string[]
	ports?: IPortVars[]
}

interface IContainerTypes {
	ts: ITsConfig
}

interface ILabel {
	name: string
	value: string | number | boolean
}

interface IVolume {
	name: string
	mount: string
	path: string
}

interface ISharedConfig {
	volumes?: IVolume[]
	labels?: ILabel[]
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

export interface IContainer {
	name: string
	type: ContainerType
	env: IEnvPairs[]
	ports: IPortVars[]
}

type IContainerConfig = ITsConfig
export type MergedConfig = ISharedConfig & IContainerConfig & IContainer

function mergeConfig(container: IContainer, defaults: IDefaults): MergedConfig {
	const defaultContainer = defaults.containers[container.type]
	const variables = Object.assign({}, defaults.shared, defaultContainer, container)

	// if (Array.isArray(defaultContainer.ports) && defaultContainer.ports.length > 0) {
	// 	variables.ports = variables.ports.concat(defaultContainer.ports)
	// }

	return variables
}

type Callback = (config: MergedConfig) => void

export function createContainerConfig(
	containers: IContainer[],
	defaults: IDefaults,
	callback?: Callback,
): MergedConfig[] {
	return containers.map((container) => {
		const conf = mergeConfig(container, defaults)

		if (callback) {
			callback(conf)
		}

		return conf
	})
}

import { createContainerConfig, IContainer, IDefaults, MergedConfig } from '../index'

describe('#createContainerConfig()', () => {
	const container: IContainer = {
		name: 'test',
		type: 'ts',
		env: [{
			name: 'TEST_ENV',
			value: 'test',
		}],
		ports: [{
			name: 'test-port',
			port: 5858,
			containerPort: 5858,
		}],
	}

	const containers = [container]

	const defaults: IDefaults = {
		shared: {
			labels: [{
				name: 'optional',
				value: true,
			}],
		},
		containers: {
			ts: {
				image: 'test:image',
				command: ['do', 'something'],
			},
		},
	}

	test('should merge both configs together', () => {
		createContainerConfig(containers, defaults, (mergedContainer) => {
			expect(mergedContainer.name).toEqual('test')
			expect(mergedContainer.image).toEqual('test:image')
			expect(mergedContainer.labels[0].name).toEqual('optional')
			expect(mergedContainer.labels[0].value).toEqual(true)
		})
	})

	test('should return an array of merged configs', () => {
		const result = createContainerConfig(containers, defaults)

		expect(result).toHaveLength(1)
		expect(result[0].ports[0].name).toEqual('test-port')
	})
})

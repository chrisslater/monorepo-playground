import * as path from 'path'
import * as yml from 'yamljs'
import { createSourceConfig } from '../createSourceConfig'

let loadedYaml: string

jest.mock('yamljs', () => ({
	load: jest.fn(() => loadedYaml = 'yaml contents'),
}))

describe('createSourceConfig', () => {
	const input = 'test.yml'
	const result = createSourceConfig(input)

	test('uses yml.load to load file relative to CWD', () => {
		expect(yml.load).toHaveBeenCalledTimes(1)
		expect(yml.load).toHaveBeenLastCalledWith(path.join(process.cwd(), input))

	})

	test('returns loaded result', () => {
		expect(result).toEqual(loadedYaml)
	})
})

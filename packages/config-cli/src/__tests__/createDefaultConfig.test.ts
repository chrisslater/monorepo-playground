import * as path from 'path'
import * as yml from 'yamljs'
import { createDefaultConfig } from '../createDefaultConfig'

let loadedYaml: string

jest.mock('yamljs', () => ({
	load: jest.fn((dir) => loadedYaml = 'yaml contents'),
}))

describe('createDefaultConfig', () => {
	const input = 'test.yml'
	const defaultInput = 'defaults.yml'

	afterEach(() => {
		yml.load.mockReset()
	})

	test('returns loaded result', () => {
		const result = createDefaultConfig(input)
		expect(result).toEqual(loadedYaml)
	})

	test('uses yml.load to load file relative to CWD when input is provided', () => {
		createDefaultConfig(input)
		expect(yml.load).toHaveBeenCalledTimes(1)
		expect(yml.load).toHaveBeenLastCalledWith(path.join(process.cwd(), input))
	})

	test('uses yml.load to load file relative to directory when input is provided', () => {
		createDefaultConfig()
		expect(yml.load).toHaveBeenCalledTimes(1)
		expect(yml.load).toHaveBeenLastCalledWith(path.join(__dirname, '../..', defaultInput))
	})
})

import { BunyanLogger } from 'snapperfish-logger'

test('BunyanLogger', () => {
	const test = jest.fn()
	const mocked = {
		info: test,
	}
	const call = 'mock info'

	const logger = new BunyanLogger(mocked)

	logger.info(call)

	expect(test).toHaveBeenCalledTimes(1)
	expect(test).toHaveBeenCalledWith(call)
})

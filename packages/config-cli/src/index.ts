#!/usr/bin/env node
import * as program from 'commander'

import { createConfig, createDockerComposeFile, createKubernetesScripts } from './command'

program
	.version('0.0.1')

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);
const cwd = process.cwd()

program
	.command('exec <config>')
	.description('Execute')
	.action((config) => {
		createConfig(config)
		// createKubernetesScripts()
	})

program
	.command('compose <config>')
	.description('compose')
	.action((config) => {
		createDockerComposeFile(config)
		// createKubernetesScripts()
	})

if (process.argv.length < 3) {
	program.help()
}

program.parse(process.argv)

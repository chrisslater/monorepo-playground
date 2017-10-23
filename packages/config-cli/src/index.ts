#!/usr/bin/env node
import * as program from 'commander'

program
	.version('0.0.1')

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

program
	.command('exec <cmd>')
	.description('Execute')
	.action((cmd) => {
		console.log('cmd', cmd)
	})

program.parse(process.argv)

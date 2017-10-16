import { Selector } from 'testcafe' // first import testcafe selectors

fixture('Users listing') // declare the fixture
	.page(`http://application.local`) // specify the start page

// then create a test and place your code there
test('Chris should appear first in users list', async (t) => {
	await t
		// Use the assertion to check if the actual header text is equal to the expected one
		.expect(Selector('[data-test="users"] div div').innerText).eql('Chris')
})

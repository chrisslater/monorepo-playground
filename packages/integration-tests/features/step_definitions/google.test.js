var {
	defineSupportCode
} = require('cucumber');
var Selector = require('testcafe').Selector;

defineSupportCode(function ({
	Given,
	When,
	Then
}) {
	var testController = null;

	Given('I am open Google\'s search page', function () {
		return this.waitForTestController()
			.then(function (tc) {
				testController = tc;
				return testController.navigateTo('https://www.google.co.uk/');
			});
	});

	// When(/^I am typing my search request (.*) on Google$/, function (text) {
	// 	var input = Selector('#lst-ib').with({
	// 		boundTestRun: testController
	// 	});

	// 	return testController.typeText(input, text);
	// });

	// Then(/^I am pressing (.*) key on Google/, function (text) {
	// 	return testController.pressKey(text);
	// });

	// Then(/I should see that the first Google\'s result is (.*)$/, function (text) {
	// 	var firstLink = Selector('#rso > div:nth-child(1) > div > div > div > h3 > a').with({
	// 		boundTestRun: testController
	// 	});

	// 	return testController.expect(firstLink.innerText).contains(text);
	// });
});

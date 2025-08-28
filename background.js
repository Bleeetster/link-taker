import { saveURL } from './src/handlers/takeCurrentURL.js'
chrome.runtime.onMessage.addListener((message,sender, sendResponse) => {
	if (message.action === "SaveUrl")
		saveURL(sendResponse);
	return true;
})

chrome.commands.onCommand.addListener( (command) => {
	switch (command) {
		case "SaveCurrentUrl":
			console.log(command)
			function response() {};
			saveURL(response);
				break;
	}
});

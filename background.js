import { saveURL } from './src/handlers/takeCurrentURL.js'
chrome.runtime.onMessage.addListener((message,sender, sendResponse) => {
	if (message.action === "SaveUrl")
		saveURL(message.url, sendResponse);
	return true;
})

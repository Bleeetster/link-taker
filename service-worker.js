	console.log("hello")
function takelink() {
	console.log(document.getElementById(head))
	console.log("hello")
}

chrome.action.onClicked.addListener({
	target: { tabId: tab.id },
	func: takelink
})

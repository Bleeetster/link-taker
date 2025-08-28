
const buttonURL = document.getElementById('buttonURL');

document.addEventListener('DOMContentLoaded', async () => {
	buttonURL.addEventListener('click', async () => {
		const tab = await chrome.tabs.query({active: true});
		console.log(tab[0].url);
		const message = await chrome.runtime.sendMessage({
			action: "SaveUrl",
			url: tab[0].url
		});
		alert(message.error)
	});
})
